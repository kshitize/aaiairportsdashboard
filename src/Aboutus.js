import React from 'react'
import aboutus from "../src/images/aboutus.webp";
import {Helmet} from 'react-helmet-async';

const Aboutus = () => {
  return (
    <>
    <Helmet>
      <title>About Us</title>
      <meta name='description' content="About Information for this website"/>
      <link rel="canonical" href="/about"/>
    </Helmet>
     <section id="header">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-12 mx-auto">
              <div className="row">
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={aboutus}
                    className="img-fluid animated"
                    alt="Coimbatore Airport"
                  />
                </div>
                <div className="col-md-6 pt-3 pt-lg-0 order-2 order-lg-1">
                  <h3>
                    <strong className='fs-1 text'>TERMS OF USE</strong>
                  </h3>
                  <h5 className="my-3">
                  The use of the website implies acceptance of the terms indicated below.

The website www.coimbatoreairport.in (hereinafter “the Website”) is an informative guide about the airport and doesn’t has direct or indirect relationship with said entity.


<br/><br/><br/><strong className='fs-2 text'>Disclaimer of Warranties and Limitation of Liability</strong><br/>

The Website has compiled information about the airport from different sources to ensure that the said information is as much accurate and current as possible. However, the Website may contain inaccuracies, errors or omissions, of which the Website rejects any responsibility.

The information contained about the flight status, scheduled or estimated arrival/departure or any complimentary flight information (terminal, gate etc.): are for informative purposes only. This information is gathered from third-party providers with a wide reputation on the sector. However, the information may contain errors due to technical issues or other external factors alien to the Website.

Therefore, the Website cannot provide any kind of guarantee and we are not responsible for the accuracy, validity, completeness and accuracy of the published information, nor for the suitability of its use for purposes other than solely informative.

The Website reserves all rights to modify, limit or cancel the access and contents of the website any time it deems appropriate, as well as the structure or data provided on its website, without prior notice.

This Website is constantly monitored to guarantee its optimal performance. In the case that technical problems could compromise the permanent availability of the Website and its services, the Website rejects any responsibility for damages in the event of interrupted connection, overload or breakdown of the network.

To contact the Website editors, you can address to the email indicated on the end of the page.

<br/><br/><br/><strong className='fs-2 text'>Third Parties Websites</strong><br/>

This Website may contain links to third parties’ Website suppliers that offer products, content or/and services. That linked sites are not under the control or influence of the Website. The Website does not assume any guarantee with its relation.

In the case that the user decides to contract any product or service through that third party, the user recognize and accept that this contract will be under its responsibility, and that the contract relationship will be exclusively established between the user and the third party, being the Website completely oblivious to it.

<br/><br/><strong className='fs-2 text'>Intellectual Property</strong><br/>

All the brands and trademarks shown in the Website, as well as the logos shown in the Website are property of its respective proprietary and/or owners.

<br/><br/><strong className='fs-2 text'>Privacy policy and cookies</strong><br/>

This website and our third-party providers set and use cookies to store and manage user preferences, gather analytic and usage data, and generally improve your user experience. This policy sets out what type of cookies we use, how we use them, and how you can control and manage them.

<br/><br/><strong className='fs-2 text'>What Are Cookies</strong><br/>

A cookie is a small text file that is placed on a computer or other device and is used to identify the user or device and to collect information. Cookies are typically assigned to one of four categories, depending on their function and intended purpose: strictly necessary cookies, performance cookies, functional cookies, and cookies for targeting and advertising purposes.

For more general information on cookies see the Wikipedia article on HTTP Cookies...

<br/><br/><strong className='fs-2 text'>How We Use Cookies</strong><br/>

We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.

<br/><br/><strong className='fs-2 text'>Disabling Cookies</strong><br/>

You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site. Therefore it is recommended that you do not disable cookies.

<br/><br/><strong className='fs-2 text'>The Cookies We Set</strong><br/>

We only use cookies to save your decision on cookies in this site, we do not store any personal information.

<br/><br/><strong className='fs-2 text'>Third Party Cookies</strong><br/>

This site uses Third party cookies. These cookies are assigned to one of the following categories: performance cookies and cookies for advertising purposes. The following section details which third party cookies you might encounter through this site:

<br/><br/><strong className='fs-2 text'>Google Analytics</strong><br/> This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content. All information these cookies collect is aggregated and therefore anonymous

For more information on Google Analytics cookies, see the official Google Analytics page.

<br/><br/><strong className='fs-2 text'>Google Adsense</strong><br/> The Google AdSense service we use to serve advertising may use several cookies to combat fraud and abuse, frequency capping, and aggregated ad reporting. When the User accesses this Website for the first time, a cookie notice is shown. If you consent to receive personalized ads, some cookies may be used for this.

For more information on Google AdSense see the <a target='_blank' rel="noopener noreferrer" href='https://policies.google.com/technologies/ads'>official Google AdSense</a> privacy FAQ.<br/><br/>

<a target='_blank' rel="noopener noreferrer" href='https://policies.google.com/technologies/partner-sites?hl=en'>How Google uses the data when you use this website</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Aboutus