import React from 'react';
import "./../comNavBarCss/Services.css"
import HomeCardsC from '../HomeCards/HomeCardsC';
import BreadCrumbC from './BreadCrumb/BreadCrumbC';

function Services() {
  return (
    <>
      <BreadCrumbC heading="Services" />
      {/* <!-- Cards Starts --> */}
      <section className="cards">
        <HomeCardsC icon={<i class="fa-brands fa-dribbble"></i>} heading="Lorem Ipsum" para="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi" />
        <HomeCardsC icon={<i class="fa-regular fa-file-lines"></i>} heading="Sed Perspiciatis" para="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore" />
        <HomeCardsC icon={<i class="fa-solid fa-gauge-high"></i>} heading="Magni Dolores" para="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official" />
        <HomeCardsC icon={<i class="fa-solid fa-layer-group"></i>} heading="Nemo Enim" para="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis" />
        <HomeCardsC icon={<i class="fa-solid fa-tv"></i>} heading="Dele Cardo" para="Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur" />
        <HomeCardsC icon={<i class="fa-solid fa-torii-gate"></i>} heading="Divera Don" para="Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur" />
      </section>
      {/* <!-- Cards Ends --> */}
    </>
  )
}

export default Services
