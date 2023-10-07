import "./form.css"

const Form = () => {
  return (
    <form action="/" method="post">
      <label htmlFor="mail">
        Ready to watch? Enter your email to create or restart your membership.
      </label>
      <div className="input">
        <input type="email" id="mail" placeholder="Email address" />
        <button className="btn-large">Get Started</button>
      </div>
    </form>
  );
};

export default Form;