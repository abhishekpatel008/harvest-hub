import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";
import apiClient from "../api/apiClient";
import { useState, useEffect } from "react";

//Hooks
export default function Home() {

    const [harvestData, setHarvestData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProducts = async () => {

        try {
            const response = await apiClient.get("/products"); // Axios GET request
            setHarvestData(response.data); // Update product state with data
        } catch (error) {
            setError(
                error.response?.data?.message || "Failed to fetch products. Please try again!");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <span className="text-xl front-semibold text-primary">Loading products...</span>
            </div>
        )
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <span className="text-xl text-red-500">Error: {error}</span>
            </div>
        );
    }

    return (<div className="max-w-\[1152px\] mx-auto px-6 py-8 justify-center">
        <PageHeading />
        <ProductListings productList={harvestData} />
    </div>);
}