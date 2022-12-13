import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import React from "react";

import { useEffect, useState } from "react";

import { getUsers,getUserById } from "../../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const CardProduct = () => {
  const dispatch = useDispatch();
  const { data, isLoading, err } = useSelector((state) => state.users);

  const [userId, setUserID] = useState("");

  useEffect(() => {
    if(userId.length >0){
      dispatch(getUserById(userId));
    }else{
      dispatch(getUsers());
    }

  }, [dispatch,userId]);
  
  const usersData = err.isRejected ?
  <div className="alert alert-danger w-100">
    {err.msg}
  </div>
   :data.map((e) => {

    return (
      <NavLink to={"post/"+e.id} className="card p-3 mb-2 w-100 userCard" key={e.id}>
      
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-row align-items-center">
          <div className="icon">
            <i className="bx bxl-mailchimp"></i>
          </div>
          <div className="ms-2 c-details">
            <h6 className="mb-0">{e.username}</h6> <span>id : {e.id}</span>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="heading">{e.name}</h3>
        <div className="mt-5">
          <div className="mt-3">
            <span className="text1">{e.email}</span>
          </div>
        </div>
      </div>
    
    </NavLink>
      )
});
  return (
    <>
      <Swiper
        rewind={true}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
      <h1 className="text-center my-3"> Users Number : {data.length}</h1>

      <input
        type={"text"}
        className="form-control w-25"
        style={{ margin: "auto" }}
        onChange={(e) => setUserID(e.target.value)}
        value={userId}
        placeholder="Enter User ID"
      />

      <div className="container py-5 card_product">{isLoading?"Loading...":usersData}</div>
    </>
  );
};

export default CardProduct;
