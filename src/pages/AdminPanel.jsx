import { useState } from "react";
import { BarChart } from "recharts";
import {
  Users,
  ShoppingCart,
  Package,
  DollarSign,
  LayoutDashboard,
  Folders,
  FolderTree,
} from "lucide-react";
import CustomModal from "../components/admin/CustomModal";
import AdminSidebar from "../components/admin/AdminSidebar";
import RenderContent from "../components/admin/RenderContent";
import {
  useGetProductsQuery,
  useGetSubCategoriesQuery,
  useGetCategoriesQuery,
  useCreateProductMutation,
  useCreateSubCategoryMutation,
  useCreateCategoryMutation,
  useDeleteProductMutation,
  useDeleteSubCategoryMutation,
  useDeleteCategoryMutation,
  useUpdateProductMutation,
  useUpdateSubCategoryMutation,
  useUpdateCategoryMutation,
  useUploadImageMutation,
} from "../services/api";

// Initial Mock Data
const initialCategories = [
  {
    id: 1,
    name: "Electronics",
    description: "Electronic devices and accessories",
    productCount: 45,
  },
  {
    id: 2,
    name: "Clothing",
    description: "Men and Women fashion",
    productCount: 120,
  },
  {
    id: 3,
    name: "Books",
    description: "Books and magazines",
    productCount: 89,
  },
];

const initialSubcategories = [
  { id: 1, name: "Smartphones", categoryId: 1, categoryName: "Electronics" },
  { id: 2, name: "Laptops", categoryId: 1, categoryName: "Electronics" },
  { id: 3, name: "Men Shirts", categoryId: 2, categoryName: "Clothing" },
  { id: 4, name: "Women Dresses", categoryId: 2, categoryName: "Clothing" },
];

const initialProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    category: "Electronics",
    subcategory: "Smartphones",
    price: 999,
    stock: 45,
    status: "Active",
  },
  {
    id: 2,
    name: "MacBook Pro M3",
    category: "Electronics",
    subcategory: "Laptops",
    price: 1999,
    stock: 8,
    status: "Active",
  },
  {
    id: 3,
    name: "Cotton T-Shirt",
    category: "Clothing",
    subcategory: "Men Shirts",
    price: 29,
    stock: 150,
    status: "Active",
  },
  {
    id: 4,
    name: "Summer Dress",
    category: "Clothing",
    subcategory: "Women Dresses",
    price: 59,
    stock: 3,
    status: "Active",
  },
];

const initialOrders = [
  {
    id: 1001,
    customer: "John Doe",
    product: "iPhone 15 Pro",
    amount: 999,
    status: "Delivered",
    date: "2024-11-20",
  },
  {
    id: 1002,
    customer: "Jane Smith",
    product: "MacBook Pro M3",
    amount: 1999,
    status: "Pending",
    date: "2024-11-22",
  },
  {
    id: 1003,
    customer: "Bob Johnson",
    product: "Cotton T-Shirt",
    amount: 29,
    status: "Shipped",
    date: "2024-11-21",
  },
];

const initialUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Customer",
    status: "Active",
    joined: "2024-01-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Customer",
    status: "Active",
    joined: "2024-02-20",
  },
  {
    id: 3,
    name: "Admin User",
    email: "admin@example.com",
    role: "Admin",
    status: "Active",
    joined: "2023-12-01",
  },
];

const revenueData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 4500 },
  { month: "May", revenue: 6000 },
  { month: "Jun", revenue: 5500 },
];

const categoryData = [
  { name: "Electronics", value: 45 },
  { name: "Clothing", value: 120 },
  { name: "Books", value: 89 },
];

const featureOptions = [
  { value: "FLASH_SALES", label: "Flash Sales" },
  { value: "BEST_SELLERS", label: "Best Sellers" },
  { value: "NEW_ARRIVALS", label: "New Arrivals" },
  { value: "NONE", label: "None" },
];

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"];

function AdminPanel() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const { data: allCategories, isLoading: isCategoriesLoading } =
    useGetCategoriesQuery();
  const { data: allSubCategories, isLoading: isSubCategoriesLoading } =
    useGetSubCategoriesQuery();
  const { data: allProducts, isLoading: isProductsLoading } =
    useGetProductsQuery();

  // mutations
  const [triggerCreateProduct] = useCreateProductMutation();
  const [triggerCreateSubCategory] = useCreateSubCategoryMutation();
  const [triggerCreateCategory] = useCreateCategoryMutation();

  const [triggerUpdateProduct] = useUpdateProductMutation();
  const [triggerUpdateSubCategory] = useUpdateSubCategoryMutation();
  const [triggerUpdateCategory] = useUpdateCategoryMutation();

  const [triggerDeleteProduct] = useDeleteProductMutation();
  const [triggerDeleteSubCategory] = useDeleteSubCategoryMutation();
  const [triggerDeleteCategory] = useDeleteCategoryMutation();

  const [triggerUploadImage] = useUploadImageMutation();

  // State for all data
  const [categories, setCategories] = useState(
    allCategories ?? initialCategories
  );
  const [subcategories, setSubcategories] = useState(
    allSubCategories ?? initialSubcategories
  );
  const [products, setProducts] = useState(
    allProducts?.products ?? initialProducts
  );
  const [orders, setOrders] = useState(initialOrders);
  const [users, setUsers] = useState(initialUsers);

  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({});

  const stats = [
    {
      title: "Total Users",
      value: users.length,
      icon: Users,
      color: "bg-blue-500",
    },
    {
      title: "Total Orders",
      value: orders.length,
      icon: ShoppingCart,
      color: "bg-green-500",
    },
    {
      title: "Total Products",
      value: products?.length,
      icon: Package,
      color: "bg-yellow-500",
    },
    {
      title: "Total Revenue",
      value: "$" + orders.reduce((sum, o) => sum + o.amount, 0),
      icon: DollarSign,
      color: "bg-purple-500",
    },
  ];

  // CRUD Functions
  const handleCreate = (type) => {
    setModalType(type);
    setEditingItem(null);
    setFormData({});
    setShowModal(true);
  };

  const handleEdit = (type, item) => {
    setModalType(type);
    setEditingItem(item);
    // setFormData(item);
    setFormData({
      ...item,
      image: item.image || "", // keep URL
    });
    setShowModal(true);
  };

  const handleDelete = async (type, id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      switch (type) {
        case "category":
          await triggerDeleteCategory(id).unwrap();
          break;
        case "subcategory":
          await triggerDeleteSubCategory(id).unwrap();
          break;
        case "product":
          await triggerDeleteProduct(id).unwrap();
          break;
        case "order":
          setOrders(orders.filter((o) => o.id !== id));
          break;
        case "user":
          setUsers(users.filter((u) => u.id !== id));
          break;
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    switch (modalType) {
      case "category":
        editingItem
          ? await triggerUpdateCategory([editingItem?._id, formData]).unwrap()
          : await triggerCreateCategory(formData).unwrap();

        break;
      case "subcategory":
        editingItem
          ? await triggerUpdateSubCategory([
              editingItem?._id,
              formData,
            ]).unwrap()
          : await triggerCreateSubCategory(formData).unwrap();

        break;
      case "product": {
        const updatedData = { ...formData };

        // If user selected NEW image (File)
        if (formData.imageFile instanceof File) {
          const fd = new FormData();
          fd.append("image", formData?.imageFile);

          const upload = await triggerUploadImage(fd).unwrap();

          // delete updatedData.image;
          updatedData.image = upload.url; // set new URL
          delete updatedData.imageFile;
        }

        editingItem
          ? await triggerUpdateProduct([editingItem?._id, updatedData]).unwrap()
          : await triggerCreateProduct(updatedData).unwrap();
        break;
      }
      case "order":
        if (editingItem) {
          setOrders(
            orders.map((o) =>
              o.id === editingItem.id ? { ...formData, id: editingItem.id } : o
            )
          );
        } else {
          setOrders([
            ...orders,
            {
              ...formData,
              id: Date.now(),
              date: new Date().toISOString().split("T")[0],
            },
          ]);
        }
        break;
      case "user":
        if (editingItem) {
          setUsers(
            users.map((u) =>
              u.id === editingItem.id ? { ...formData, id: editingItem.id } : u
            )
          );
        } else {
          setUsers([
            ...users,
            {
              ...formData,
              id: Date.now(),
              joined: new Date().toISOString().split("T")[0],
            },
          ]);
        }
        break;
    }

    setShowModal(false);
    setFormData({});
  };

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "categories", label: "Categories", icon: Folders },
    { id: "subcategories", label: "Subcategories", icon: FolderTree },
    { id: "products", label: "Products", icon: Package },
    { id: "orders", label: "Orders", icon: ShoppingCart },
    { id: "users", label: "Users", icon: Users },
  ];

  return (
    <div className="relative flex w-full h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        menuItems={menuItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content */}
      <div className="w-[200px] flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-6 mt-6 md:mt-0">
            <h1 className="text-3xl font-bold text-gray-800 capitalize">
              {activeTab}
            </h1>
            <p className="text-gray-600 mt-1">Manage your {activeTab} here</p>
          </div>
          <RenderContent
            activeTab={activeTab}
            stats={stats}
            products={allProducts?.products}
            orders={orders}
            users={users}
            categories={allCategories?.categories}
            revenueData={revenueData}
            categoryData={categoryData}
            COLORS={COLORS}
            handleCreate={handleCreate}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            subcategories={allSubCategories?.subCategories}
          />
        </div>
      </div>
      {/* Modal */}
      <CustomModal
        formData={formData}
        setFormData={setFormData}
        modalType={modalType}
        showModal={showModal}
        setShowModal={setShowModal}
        categories={allCategories?.categories}
        subCategories={allSubCategories?.subCategories}
        editingItem={editingItem}
        handleSubmit={handleSubmit}
        featureOptions={featureOptions}
      />
    </div>
  );
}

export default AdminPanel;
