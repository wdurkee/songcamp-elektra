import Mailchimp from 'react-mailchimp-form'
import "./App.css"

function MailChimpForm() {
    return (
        <div>
        <Mailchimp
        className="chimpForms"
                action="https://band.us6.list-manage.com/subscribe/post?u=f4851db0998383af4e573916e&id=9562a75ed0"
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
