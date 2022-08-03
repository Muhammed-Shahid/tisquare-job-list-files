import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div>
<footer className="footer">
  <div className="container bottom_border">
    <div className="row">
      <div className=" col-sm-4 col-md col-sm-4  col-12 col">
        <h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>
        {/*headin5_amrc*/}
        <p className="mb10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <p><i className="fa fa-location-arrow" /> 9878/25 sec 9 rohini 35 </p>
        <p><i className="fa fa-phone" />  +91-9999878398</p>
        <p><i className="fa fa fa-envelope" /> trisquare.engg@gmail.com</p>
      </div>
 
      <div className=" col-sm-4 col-md  col-6 col">
        <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
        {/*headin5_amrc*/}
        <ul className="footer_ul_amrc">
          <li><a href="http://webenlance.com">Careers</a></li>
          <li><a href="http://webenlance.com">About Us</a></li>
          <li><a href="http://webenlance.com">Contact</a></li>
    
        </ul>
        {/*footer_ul_amrc ends here*/}
      </div>
      <div className=" col-sm-4 col-md  col-12 col">
        <h5 className="headin5_amrc col_white_amrc pt2">Follow us</h5>
        {/*headin5_amrc ends here*/}
        <ul className="footer_ul2_amrc">
          <li><a href="www.linkedin.com"><i className="fab fa-linkedin fleft padding-right" /> </a><p><a href="#">https://www.lipsum.com/</a></p></li>
          <li><a href="www.facebook.com"><i className="fab fa-facebook fleft padding-right" /> </a><p><a href="#">https://www.lipsum.com/</a></p></li>
          <li><a href="www.twitter.com"><i className="fab fa-twitter fleft padding-right" /> </a><p><a href="#">https://www.lipsum.com/</a></p></li>
        </ul>
        {/*footer_ul2_amrc ends here*/}
      </div>
    </div>
  </div>
  <div className="container">
    <ul className="foote_bottom_ul_amrc">
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/jobs">Vacancies</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
    {/*foote_bottom_ul_amrc ends here*/}
    <p className="text-center">Copyright @2022 | Designed by Trisquare Engg</p>
    <ul className="social_footer_ul">
      <li><a href="http://webenlance.com"><i className="fab fa-facebook-f" /></a></li>
      <li><a href="http://webenlance.com"><i className="fab fa-twitter" /></a></li>
      <li><a href="http://webenlance.com"><i className="fab fa-linkedin" /></a></li>
      <li><a href="http://webenlance.com"><i className="fab fa-instagram" /></a></li>
    </ul>
    {/*social_footer_ul ends here*/}
  </div>
</footer>


    </div>
  )
}

export default Footer