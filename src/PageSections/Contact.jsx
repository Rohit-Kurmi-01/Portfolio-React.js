import React from 'react'

function Contact() {
    return (
        <section class="contact" id="contact">
        <h2 class="heading">Contact <span>ME</span></h2>

        <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="482344aa-af71-4d32-ba2d-c04055ba221b"/>
            <div class="input-box">
                <input type="text" name="fullname" id="" placeholder="Full Name"/>
                <input type="email" name="email" placeholder="Email Address"/>
            </div>

            <div class="input-box">
                <input type="number" name="MobileNumber" id="" placeholder="Mobile Number"/>
                <input type="text" name="Subject" placeholder="Email Subject"/>
            </div>
            <textarea name=" Massage" id="" cols="30" rows="10" placeholder="Your Massage"></textarea>
            <input type="submit" name="button" value="send-Massage" class="btn"/>
        </form>
     </section>
    )
}

export default Contact
