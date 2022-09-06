import React from 'react';

const styles = {
    backgroundColor: "white",
    height: "100vh",
    width: "100vw"
}

const PageContent = ({ children }) =>
    <div style={styles}>
        {children}
    </div>

export default PageContent;