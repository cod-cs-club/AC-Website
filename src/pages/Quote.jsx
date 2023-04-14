import NavBar from 'components/NavBar.jsx'
import Footer from 'components/Footer.jsx'

export default function QuotePage(){
    return (
        <>
        <NavBar />
        <div id="quoteText">
            <div id="quote-heading">
                <h1>Got a problem? We can fix it!</h1>
                <h2>Send us an email & we'll get back to you as soon as we can</h2>
            </div>
            <div>
                <form>
                    <fieldset class="form-box1">
                        <label id="label-firstname" for="firstname">
                            <span>First Name</span>
                        </label>
                        <input id="firstname" type="text" name="firstname" placeholder="First Name" inputmode="text" autocomplete="given-name" required></input>
                    </fieldset>

                    <fieldset class="form-box2">
                        <label id="label-lastname" for="lastname">
                            <span>Last Name</span>
                        </label>
                        <input id="lastname" type="text" name="lastname" placeholder="Last Name" inputmode="text" required></input>
                    </fieldset>

                    <fieldset id="form-box3">
                        <label id="label-email" for="email">
                            <span>Email</span>
                        </label>
                        <input id="email" type="email" name="email" placeholder="Email Address" required></input>
                    </fieldset>

                    <fieldset id="form-box4">
                        <label id="label-phone" for="phone">
                            <span>Phone Number</span>
                        </label>
                        <input id="phone" type="tel" placeholder="(123) - 456 - 7890" required></input>
                    </fieldset>

                    <fieldset id="form-box4">
                        <label id="label-msg" for="msg">
                            <span>Message</span>
                        </label>
                        <textarea id="msg" type="text" name="msg" placeholder="Additional Details" inputmode="text" required></textarea>
                    </fieldset>

                    <div class="submit-button">
                        <input class="submit" type="submit" value="Submit"></input>
                    </div>
                </form>
            </div>
        </div>
        <Footer />
        </>
    )
}