import "./index.css"

export default function UserAvatarImg(props) {
  return (
    <div className="user-image">
        <img src={props.imgUrl} />
    </div>
  );
}
