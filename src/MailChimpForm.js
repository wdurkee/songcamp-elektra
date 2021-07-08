import Mailchimp from 'react-mailchimp-form'
import "./App.css"

function MailChimpForm() {
    return (
        <div>
        <Mailchimp
        className="chimpForms"
                action={process.env.MAILCHIMP_ACTION_KEY}
                
                fields={[
                    {
                        name: 'EMAIL',
                        placeholder: 'email...',
                        type: 'email',
                        required: true
                    }
                ]}
                messages = {
                    {
                        sending: "SENDING...",
                        success: "SUCCESS",
                        error: "ERROR",
                        empty: "ENTER EMAIL",
                        duplicate: "ALREADY ON THE LIST",
                        button: "ENTER"
                    }
                }
                />
        </div>
    )
}


export default MailChimpForm;
