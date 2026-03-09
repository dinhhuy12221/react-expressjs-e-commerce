import "./index.css";

export default function UserAvatarImg({ url }) {
  return (
    <div className="user-image">
      <img src={url} />
    </div>
  );
}
