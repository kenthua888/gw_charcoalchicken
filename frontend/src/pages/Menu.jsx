import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Menu = () => {
    const [categories, setCategories] = useState([]);
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState(null); // Track the active category
    useEffect(() => {
        const fetchCategories = async () => {
          try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/categories`); // Proxy URL (if proxy is set in package.json)
            
            // Check for a successful response before parsing as JSON

            if (response.ok) {
              const data = await response.json();

              setCategories(Array.isArray(data) ? data : []); // Ensure it's an array
              setCategories(data); // Update state with fetched categories
            } else {
                console.error("Error fetching categories:", response.statusText);
            } 
            } catch (err) {
                console.error("Error:", err);
            }
        };
        const fetchMenuItems = async () => { 
            try {
                // Fetch the menu items with descriptions
                const menuItemsResponse = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/menu-items`);
                if (!menuItemsResponse.ok) {
                    throw new Error('Error fetching menu items');
                }
                const menuItemsData = await menuItemsResponse.json();
        
                // For each menu item, fetch the pricing information
                const menuItemsWithPrices = await Promise.all(menuItemsData.map(async (item) => {
                    const priceResponse = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/menu-items/prices/name/${item.id}`);
                    
                    if (priceResponse.ok) {
                        const prices = await priceResponse.json();
                        item.prices = prices; // Attach the prices to the item
                    } else {
                        console.error(`Error fetching prices for item: ${item.id}`);
                    }
        
                    return item; // Return the item with both description and prices
                }));
        
                // Set the updated menu items with both descriptions and prices
                setMenuItems(menuItemsWithPrices);
        
                // Group the menu items by category_id for rendering
                const groupedItems = menuItemsWithPrices.reduce((acc, item) => {
                    if (!acc[item.category_id]) {
                        acc[item.category_id] = [];
                    }
                    acc[item.category_id].push(item);
                    return acc;
                }, {});
        
                // Set the grouped menu items
                setGroupedMenuItems(groupedItems);
                
            } catch (err) {
                console.error("Error:", err);
            } finally {
                setLoading(false);
            }
        };
        
    
        fetchCategories(); // Call the fetch function when the component mounts
        fetchMenuItems();

      }, []); // Empty dependency array means this runs only once when the component mounts
    
    useEffect(() => {
        const handleScroll = () => {
            let currentCategory = null;
            categories.forEach((category) => {
                const section = document.getElementById(`category-${category.id}`);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        currentCategory = category.id;
                    }
                }
            });

            if (currentCategory !== activeCategory) {
                setActiveCategory(currentCategory);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [categories, activeCategory])

    if (loading) {
        return <p>Loading categories...</p>;  // Show loading message while fetching
    }


    return (
        <MenuContainer>

            <h1>Our Menu</h1>

            <CategoryNav>
                <CategoryList>
                    {categories.map((category) => (
                        <CategoryItem key={category.id} isActive={activeCategory === category.id}>
                            <a href={`#category-${category.id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    const section = document.getElementById(`category-${category.id}`);
                                    if (section) {
                                        const offset = -80; // Adjust this value based on your navbar height
                                        const topPosition = section.getBoundingClientRect().top + window.scrollY + offset;

                                        window.scrollTo({ top: topPosition, behavior: "smooth" });
                                    }
                                }}
                            >
                                {category.name}
                            </a> {/* Links to section */}
                        </CategoryItem>  // Render each category
                    ))}
                </CategoryList>
            </CategoryNav>
            {/* Menu Sections */}
            <MenuSectionsContainer>
                <MenuSections>
                    {categories.map((category) => (
                        <MenuSection key={category.id} id={`category-${category.id}`}>
                            <h2>{category.name}</h2>
                            <MenuItems>
                                {menuItems
                                    .filter((item) => item.category_id === category.id)
                                    .map((item) => (
                                        <MenuItem key={item.id}>
                                            <ItemRow>
                                                <h3>{item.name}</h3>
                                                {item.prices.length === 1 && item.prices[0].size === "Fixed Size" ? (
                                                    <Price>{`$${item.prices[0].price}`}</Price>
                                                ) : (
                                                    <SizeContainer>
                                                        {item.prices.map((price, index) => (
                                                            <SizeColumn key={index}>
                                                                <SizeName>{price.size}</SizeName>
                                                                <SizePrice>{`$${price.price}`}</SizePrice>
                                                            </SizeColumn>
                                                        ))}
                                                    </SizeContainer>
                                                )}
                                            </ItemRow>
                                            <p>{item.description}</p>
                                        </MenuItem>
                                    ))}
                            </MenuItems>
                        </MenuSection>
                    ))}
                </MenuSections>
            </MenuSectionsContainer>
        </MenuContainer>
    );
};

const MenuContainer = styled.div`
    width: 100vw;
    margin: 0 auto;
    scroll-behaviour: smooth;
    h1 {
        background-color: #F3F8E5;
        color: #7fbc42;
        padding: 1rem 2rem;
    }

`;

const CategoryNav = styled.nav`
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    width: 100%;
    padding: 1rem 2rem;
    z-index: 1000;
`;

const CategoryList = styled.ul`
    display: flex;
    gap: 2rem;
    justify-content: center;
    list-style: none;
    padding: 0;
`;

const CategoryItem = styled.li`
    font-size: 0.8rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    a {
        text-decoration: none;
        color: ${({ isActive }) => (isActive ? "#7fbc42" : "rgb(16 24 32 / 0.7)")};
        font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
        cursor: pointer;

        &:hover {
            color: #7fbc42;
        }
    }
`;

const MenuSectionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MenuSections = styled.div`
    max-width: 1200px;
    margin-top: .1rem;
    padding-top: 4rem;


    
`;

const MenuSection = styled.div`
    margin-bottom: 2rem;

    h2 {
        font-size: 1.5rem;
        color: #333;

        padding-bottom: 0.5rem;
        margin-bottom: 1rem;

    }
`;

const MenuItems = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;

    margin-bottom: 2rem;
`;

const MenuItem = styled.div`
    margin-bottom: 1.5rem;
    width: 100%;
    h3, p {
        text-align: left;  /* Aligns both the item name and description to the left */
    }
`;


const ItemRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #ccc;
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
`;

const Price = styled.span`
    color: #333;

    text-align: right;
`;

const SizeContainer = styled.div`
    display: flex;
    gap: 1rem;
    text-align: right;

`;

const SizeColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const SizeName = styled.span`
    font-weight: bold;
    color: #7fbc42;
`;

const SizePrice = styled.span`
    color: #333;
`;


export default Menu;
