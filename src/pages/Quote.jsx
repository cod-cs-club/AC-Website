export default function QuotePage(){
    return (
        <>
        <div id="quoteContainer">
            <div id="quote-heading">
                <h1>Got a problem? We can fix it!</h1>
                <h2>Send us an email & we'll get back to you as soon as we can</h2>
            </div>
            <div>
                <form>
                <fieldset className="form-box1">
                    <label id="label-email" htmlFor="subject">
                        <span>Subject</span>
                    </label>
                    <input id="subject" type="subject" name="subject" placeholder="Subject" required />
                </fieldset>

                <fieldset className="form-box2">
                    <label id="label-firstname" htmlFor="name">
                        <span>Name</span>
                    </label>
                    <input id="firstname" type="text" name="name" placeholder="name" inputmode="text" autocomplete="given-name" required />
                </fieldset>

                    <fieldset className="form-box3">
                        <label id="label-email" htmlFor="email">
                            <span>Email</span>
                        </label>
                        <input id="email" type="email" name="email" placeholder="Email Address" required />
                </fieldset>

                <fieldset id="form-box4">
                    <label id="label-msg" for="msg">
                        <span>Details</span>
                    </label>
                    <textarea id="msg" type="text" name="message" placeholder="Additional Details" inputmode="text" required />
                </fieldset>
                    <div className="submit-button">
                        <input className="submit" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}