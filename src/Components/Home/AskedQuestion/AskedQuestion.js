import React from 'react';
// import image from '../../../Assets/Accordian/image.jpg'

const AskedQuestion = () => {
    return (
        <div className='container mx-auto my-20'>
            <h2 className='mx-auto text-4xl font-semibold mb-10'>Frequently Asked Questions</h2>

            <div className=''>

                {/* <div>
                    <img className=' w-[540px] h-[540px] rounded-xl rounded-s-none' src={image} alt="" />
                </div> */}

                <div className="hero min-h-screen rounded-2xl" style={{ backgroundImage: 'url(https://www.rosaphoto.com.au/wp-content/uploads/2021/06/alto-event-space-wedding-photos-alto-receptions-wedding-photographer-photography-191208-050.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <div className="collapse collapse-arrow rounded-b-none bg-base-200">
                                <input type="radio" name="my-accordion-2" defaultChecked />
                                <div className="collapse-title text-xl font-medium ">
                                    1. What is included in your wedding photography packages?
                                </div>
                                <div className="collapse-content">
                                    <p>Our wedding photography packages typically include a pre-wedding consultation, coverage on the day of the wedding (hours specified in the package), editing and retouching of images, and delivery of high-resolution digital images. Some packages may also include additional services like engagement shoots or albums.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow rounded-none bg-base-200">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium">
                                    2. How many hours of coverage do we get?
                                </div>
                                <div className="collapse-content">
                                    <p>The hours of coverage depend on the package you choose. We offer packages ranging from 4 hours for intimate weddings to full-day coverage. Additional hours can usually be added if needed.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow rounded-none bg-base-200">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium">
                                    3. Can we customize a package to fit our needs?
                                </div>
                                <div className="collapse-content">
                                    <p>Yes, we are flexible and can tailor a package to suit your specific requirements. Whether you need additional hours, a second photographer, or specific print products, we can create a personalized package for you.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow rounded-none bg-base-200">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium">
                                    4. Do you offer engagement or pre-wedding photo sessions?
                                </div>
                                <div className="collapse-content">
                                    <p>Yes, we offer engagement or pre-wedding sessions which can be included in some of our packages or booked separately.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow rounded-none bg-base-200">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium">
                                    5. How long will it take to receive our photos after the wedding?
                                </div>
                                <div className="collapse-content">
                                    <p>The editing process typically takes 4-6 weeks depending on the season and the volume of photos. We strive to deliver high-quality images promptly.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow rounded-none bg-base-200">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium">
                                    6. Can we request specific shots or styles for our wedding photos?
                                </div>
                                <div className="collapse-content">
                                    <p>Absolutely! We encourage you to share your vision and ideas with us. We will work closely with you to capture the moments and styles that you desire.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow rounded-t-none bg-base-200">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium">
                                    8. What happens if it rains on our wedding day?
                                </div>
                                <div className="collapse-content">
                                    <p>We are prepared to work in various conditions. We can discuss alternative plans and indoor locations for photos if needed.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default AskedQuestion;