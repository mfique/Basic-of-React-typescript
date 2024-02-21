import React from 'react';


const Lifestyle= () => {
    const containerStyle: React.CSSProperties = {
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        padding:'20px',
        backgroundColor:'yellow',
        borderRadius:'8px',
        boxShadow:'0 0 10px rgba(0, 0, 0.1)',
    };
    const haedingStyle: React.CSSProperties = {
      color:'#333',
    };

    const paragraphStyle: React.CSSProperties= {
      color:'#555',
      lineHeight:'1.5',
    };
    
  return (
    <div style={containerStyle}>
        <h1 style={haedingStyle}>STORY OF MY LIFE</h1>
        <p style={paragraphStyle}>
            My name is Mugisha Pacifique  and I am from Nyaruguru district in southern province.I study in Nyabihu district in Western province and I aim at becoming a software programmer specifically in a full stuck development.
        </p>
        </div>
  );
};

export default Lifestyle;