import React from 'react'
import BreadCrumbC from './BreadCrumb/BreadCrumbC'
import BloggingCard from './BlogCars/BloggingCard';
import "./../comNavBarCss/Blog.css"

function Blog() {
  return (
    <>
      <BreadCrumbC heading="Blog" />
      <BloggingCard bgImgC="https://bootstrapmade.com/demo/templates/Company/assets/img/blog/blog-1.jpg"
        username=" John Doe " date=" Jan 1, 2020 " comment=" 12 Comments "
        heading="Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia"
        para="Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et
         laboriosam eius aut nostrum quidem aliquid dicta. Et eveniet
         enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit
         sunt. Voluptate porro consequatur assumenda perferendis dolore." />
      <BloggingCard bgImgC="https://bootstrapmade.com/demo/templates/Company/assets/img/blog/blog-2.jpg"
        username=" John Doe " date=" Jan 1, 2020 " comment=" 12 Comments "
        heading="Nisi magni odit consequatur autem nulla dolorem" para="Incidunt voluptate sit temporibus
         aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur
          nam. Ad impedit qui officiis est in non aliquid veniam laborum. Id ipsum qui aut. Sit aliquam et
           quia molestias laboriosam. Tempora nam odit omnis eum corrupti qui aliquid excepturi molestiae.
            Facilis et sint quos sed voluptas. Maxime sed tempore enim omnis non alias odio quos distinctio." />
      <BloggingCard bgImgC="https://bootstrapmade.com/demo/templates/Company/assets/img/blog/blog-3.jpg"
        username=" John Doe " date=" Jan 1, 2020 " comment=" 12 Comments " heading="Possimus soluta ut id
         suscipit ea ut. In quo quia et soluta libero sit sint." para="Aut iste neque ut illum qui
          perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus
           fugiat voluptate enim tenetur sunt omnis. Doloremque est saepe laborum aut. Ipsa cupiditate ex 
           harum at recusandae nesciunt. Ut dolores velit." />
      <BloggingCard bgImgC="https://bootstrapmade.com/demo/templates/Company/assets/img/blog/blog-4.jpg"
        username=" John Doe " date=" Jan 1, 2020 " comment=" 12 Comments " heading="Non rem rerum nam cum
         quo minus. Dolor distinctio deleniti explicabo eius exercitationem." para="Aspernatur rerum
          perferendis et sint. Voluptates cupiditate voluptas atque quae. Rem veritatis rerum enim et
           autem. Saepe atque cum eligendi eaque iste omnis a qui. Quia sed sunt. Ea asperiores expedita 
            Voluptatem ducimus sint id earum ut nesciunt sed corrupti nemo." />

      <div className='cardBtnB'>
        <button className='cartButtonB'>1</button>
        <button className='cartButtonB cartButtonBactive'>2</button>
        <button className='cartButtonB'>3</button>
      </div>
    </>
  )
}

export default Blog
