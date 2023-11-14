// Components and Actions:
// 1. Import necessary modules and components
// 2. Define the DashboardLayout component
//    - Takes children and params as props
//    - Checks if the user is authenticated using Clerk's auth() function
//    - Redirects to the sign-in page if the user is not authenticated
//    - Queries the database to find a store associated with the user and store ID
//    - Redirects to the root page if the store does not exist
//    - Renders the layout, including the Navbar and children components

// Import necessary modules and components
import Navbar from "@/components/navbar";

// Define the DashboardLayout component
export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  // Render the layout, including the Navbar and the children components
  return (
    <>
      <Navbar /> {/* Render the Navbar component */}
      {children} {/* Render the children components within the layout */}
    </>
  );
}
