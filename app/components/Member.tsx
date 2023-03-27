
interface MemberProps {
  name: string;
  position: string;
  description: string;
}

export default function Member({ name, position, description }: MemberProps) {
  return (
    <div className='member row'>
      <div className='left-container'>
        <div className='member-info'>
          <div className='member-description'>
            {description}
          </div>
          <div className='member-contact'>
            <div className='member-name'><span className='inner-text'>{name}</span></div>
            <div className='member-position'>{position}</div>
          </div>
        </div>
      </div>
      <div className='right-container'>
        <div className='member-image'>
          <img src='https://via.placeholder.com/150' alt='member' />
        </div>
      </div>
    </div>
  );
}