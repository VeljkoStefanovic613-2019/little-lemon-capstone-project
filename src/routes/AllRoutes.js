import { Routes, Route } from "react-router-dom";
import { About, Home } from "../pages";
import { Menu } from "../pages";
import { Reservations } from "../pages";
import { OrderOnline } from "../pages";
import { Login } from "../pages";

export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route path="reservations" element={<Reservations />} />
        <Route path="order-online" element={<OrderOnline />} />
        <Route path="login" element={<Login />} />
    </Routes>
    </>
  )
}