import './index.css'
function Notification({ title, content }) {
  return (
    <div className="background">
      <div className="notification">
        <div className="title">
          <span>{title}awdawd</span>
          <hr />
        </div>
        <div className="content">
          <span>{content}aaaa</span>
        </div>
      </div>
    </div>
  );
}

export default Notification;
