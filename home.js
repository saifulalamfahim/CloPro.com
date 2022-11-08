// import Data from "../Data.js";

import axios from "axios";


const HomeScreen = {
    
    render: async () => {
        // const  products = Data;
        // console.log(products);

        const response = await axios({
            url: 'http://localhost:5000/api/products',
             headers: {
            'Content-Type': 'application/json',
        },
        });
        if(!response || response.statusText !== 'OK') {
            return `<div>Error in getting data</div>`;
        }
        const products = response.data;

        // const property = Object.values(products);
        // console.log(property);
        const { products1, products2, products3, products4 } = products;
        console.log(products1);

      return `
                 <header>
                <div class="container">
                    <div class="Fashon-house">
                        <h1>FASHION</h1>
                        <h5>HOUSE</h5>
                    </div>
                      <div class="fashion">
                        <h1>FASHION</h1>
                    </div>
                    <div class="gallery">
                        <div class="gallery-1">
                            <div class="curousel">
                               <div>
                                    <img src="/Images/Image - 1.png" alt="">    
                               </div>
                               <div class="icon">
                                    <i class="fa fa-angle-left" style="font-size:36px"></i>
                                    <i class="fa fa-angle-right" style="font-size:36px"></i>
                               </div>
                               <div class="Curousel-details">
                                    <h2>Hand bag 40</h2>
                                    <p>It is a long established fact that a reader will be distracted by the readable. The point of using Lorem Ipsum i that it has a more-or-less normal distribution of letters</p>
                               </div>
                            </div>
                            <div class="carousel-Gallery">
                                <ul>
                                    <li><img src="Images/Image - 2.png" alt=""></li>
                                    <li><img src="Images/Image - 3.png" alt=""></li>
                                    <li><img src="Images/Image - 4.png" alt=""></li>
                                </ul>
                            </div>
                        </div>
                        <div class="gallery-2">
                            <img src="Images/Image - 5.png" alt="">
                        </div>
                    </div>
                    <div class="some-text">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
     </header>
      <section>
      <div class="Products-Container">
          <div class="PRODUCTS">
              <p>PRODUCTS</p>
          </div>
          <div class="Card">
          <div class="card-split">
          ${products1.map( product1 => `
         
          <a href="/#/product/${product1._id}">
          <div class="card-1">
         <div class="card-img">
             <img src="${product1.image}" alt="">
         </div>
         <div class="Card-dtails">
             <div class="Card-name">
                 <h1>${product1.name}</h1>
             </div>
             <div class="Star">
                 <i><span class="iconify" data-icon="ant-design:star-filled" style="color: black;"></span></i>
                 <i><span class="iconify" data-icon="ant-design:star-filled" style="color: black;"></span></i>
                 <i><span class="iconify" data-icon="ant-design:star-filled" style="color: black;"></span></i>
                 <i><span class="iconify" data-icon="bxs:star-half" style="color: black;"></span></i>
                 <i><span class="iconify" data-icon="ant-design:star-outlined" style="color: black;"></span></i>
             </div>
             <div class="Brend-price">
                <p>${product1.brand}</p>
                <p>Price : $${product1.price}</p>
             </div>
         </div>
     </div></a>
          `  
            )}
    </div>
    <div class="card-split">
    ${products2.map( product2 => `
            <a href="/#/product/${product2._id}">
          <div class="card-1">
         <div class="card-img">
             <img src="${product2.image}" alt="">
         </div>
         <div class="Card-dtails">
             <div class="Card-name">
                 <h1>${product2.name}</h1>
             </div>
             <div class="Star">
                 <i><span class="iconify" data-icon="ant-design:star-filled" style="color: black;"></span></i>
                 <i><span class="iconify" data-icon="ant-design:star-filled" style="color: black;"></span></i>
                 <i><span class="iconify" data-icon="ant-design:star-filled" style="color: black;"></span></i>
                 <i><span class="iconify" data-icon="bxs:star-half" style="color: black;"></span></i>
                 <i><span class="iconify" data-icon="ant-design:star-outlined" style="color: black;"></span></i>
             </div>
             <div class="Brend-price">
                <p>${product2.brand}</p>
                <p>Price : $${product2.price}</p>
             </div>
         </div>
     </div></a>
    
    ` )}
    </div>
          </div>
          </div>
          </section>
           <section>
                <div class="Banner-Container">
                    <div class="Banner-detail">
                        <h2>Happy offer</h2>
                        <h1>Get 20% off</h1>
                        <p class="pp">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,</p>
                        <p class="ppp">making it over 2000 years old. Richard McClintock,</p>
                    </div>
                    <div class="Banner-img">
                        <img src="Images/Image - 14.png" alt="">
                    </div>
                </div>
            </section>
            <section>
            <div class="Clothes-Container">
                <div class="CLOTHES">
                    <p>CLOTHES</p>
                </div>
                <div class="Card">
                <div class="card-split">
                ${products3.map( product3 => `
               
                <a href="/#/product/${product3._id}">
                <div class="card-1">
               <div class="card-img">
                   <img src="${product3.image}" alt="">
               </div>
               <div class="Card-dtails">
                   <div class="Card-name">
                       <h1>${product3.name}</h1>
                   </div>
                   <div class="Star">
                       <i><span class="iconify" data-icon="ant-design:star-filled" style="color: black;"></span></i>
                       <i><span class="iconify" data-icon="ant-design:star-filled" style="color: black;"></span></i>
                       <i><span class="iconify" data-icon="ant-design:star-filled" style="color: black;"></span></i>
                       <i><span class="iconify" data-icon="bxs:star-half" style="color: black;"></span></i>
                       <i><span class="iconify" data-icon="ant-design:star-outlined" style="color: black;"></span></i>
                   </div>
                   <div class="Brend-price">
                      <p>${product3.brand}</p>
                      <p>Price : $${product3.price}</p>
                   </div>
               </div>
           </div></a>
                `  
                  )}
      
          </div>
          <div class="card-split">
          ${products4.map( product4 => `
      
      
                  <a href="/#/product/${product4._id}">
                <div class="card-1">
               <div class="card-img">
                   <img src="${product4.image}" alt="">
               </div>
               <div class="Card-dtails">
                   <div class="Card-name">
                       <h1>${product4.name}</h1>
                   </div>
                   <div class="Star">
                       <i><span class="iconify" data-icon="ant-design:star-filled" style="color: black;"></span></i>
                       <i><span class="iconify" data-icon="ant-design:star-filled" style="color: black;"></span></i>
                       <i><span class="iconify" data-icon="ant-design:star-filled" style="color: black;"></span></i>
                       <i><span class="iconify" data-icon="bxs:star-half" style="color: black;"></span></i>
                       <i><span class="iconify" data-icon="ant-design:star-outlined" style="color: black;"></span></i>
                   </div>
                   <div class="Brend-price">
                      <p>${product4.brand}</p>
                      <p>Price : $${product4.price}</p>
                   </div>
               </div>
           </div></a>
          
          ` )}
          </div>
      
      
                </div>
                </div>
                </section>
        
     <footer>
                <div class="Footer-Container">
                    <div class="footer-detail">
                        <div class="Contact">
                            <div class="Contact-detail">
                                <p>Address : b-block Halishahar</p>
                                <p>Number : 01627800823</p>
                                <p>Email : fahim12345saiful@gmail.com</p>
                            </div>
                            <div class="line"></div>
        
                        </div>
                        <div class="partner">
                                <div class="partner-detail">
                                    <h5>Partner</h5>
                                    <p>Cannon, Nikie, Boltron, Goggle, Mataversy, Wolton, Nirvanaba, Prane,
                                        KalaManik, Boston, Maxfox, CNNN, Commercial, Fire, Aladin, Daraje, FoxMEtter,  </p>
                                </div>
                                <div class="line-1"></div>
                        </div>
                       
                        <div class="social-media">
                            <i><a href=""><span class="iconify" data-icon="ci:facebook" style="color: white;"></span></a></i>
                            <i><a href="https://github.com/saifulalamfahim"><span class="iconify" data-icon="bxl:github" style="color: white;"></span></a></i>
                            <i><a href=""><span class="iconify" data-icon="entypo-social:linkedin-with-circle" style="color: white;"></span></a></i>                     
                        </div>
                    </div>
                    <div class="cpyright">
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <p class="copy">Copyright  resrved by Saiful Alam</p>
                    </div>
                </div>
            </footer>
      `
    }
}


export default HomeScreen;