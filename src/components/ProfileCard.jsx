function ProfileCard({ image, name, description }) {
  return (
    <div style={cardStyle}>
      <img src={image} alt="profile" style={imgStyle} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

const cardStyle = {
  backgroundColor: '#2e2e3e',
  padding: '20px',
  borderRadius: '12px',
  textAlign: 'center',
  boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
};



const imgStyle = {
  width: '100px',
  borderRadius: '50%',
  marginBottom: '10px',
  display: 'block',    // 이 부분을 추가
  margin: 'auto'       // 이 부분을 추가
};

export default ProfileCard;