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
            <HeaderContainer>
                <h1>Our Menu</h1>
                <p>Freshly cooked meals and family favourites</p>
            </HeaderContainer>
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
        </MenuContainer>
    );
};

const MenuContainer = styled.div`
    max-width: 1200px;
    width: 100vw;
    margin: 0 auto;
    padding: 1rem 2rem;
    scroll-behaviour: smooth;
`;

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; /* Centers text horizontally */
    text-align: center;  /* Ensures text inside is centered */
    margin-bottom: 2.5rem; /* Adds spacing between header and categories */


    h1 {
        font-size: 500;
        color: #7fbc42;
        padding: 1rem 2rem;
    }
`;

const CategoryNav = styled.nav`
    position: sticky;
    top: 0;
    z-index: 1000;
    background-color: rgba(255, 255, 255, 0.8); /* White background with 80% opacity */
    backdrop-filter: blur(10px); /* Adds a subtle blur effect */

    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #fff;

    /* Handle overflow */

    width: 100%;  /* Ensures it takes up the full width */
    max-width: 100vw;  /* Limits the width to viewport width */
    box-sizing: border-box;  /* Prevents padding from affecting width */
    overflow-x: auto;  /* Allows horizontal scrolling */
    overflow-y: hidden; /* Prevents vertical overflow */




`;
const CategoryList = styled.ul`
    list-style: none;
    padding: 0;

    display: flex;
    gap: 2rem;
    justify-content: space-between;

    flex-wrap: nowrap;
    white-space: nowrap;
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

const MenuSections = styled.div`
    margin-top: 2rem;
    padding-top: 4rem;

`;

const MenuSection = styled.div`
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;


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
