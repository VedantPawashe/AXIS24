import React from 'react';

class LoginPage extends React.Component {
    render() {
        return (
            <div style={{
                fontFamily: 'Arial, sans-serif',
                backgroundColor: 'black',
                color: 'white',
                maxWidth: '400px',
                margin: 'auto',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '20px',
                borderRadius: '5px'
            }}>
                <h2>Hello! Welcome Back</h2>
                <form action="/action_page.php" method="post">
                    <label htmlFor="email">Enter Email:</label><br />
                    <input type="text" id="email" name="email" required style={{
                        width: 'calc(100% - 20px)',
                        padding: '10px',
                        marginBottom: '20px'
                    }}/><br /><br />
                    <label htmlFor="password">Password:</label><br />
                    <input type="password" id="password" name="password" required style={{
                        width: 'calc(100% - 20px)',
                        padding: '10px',
                        marginBottom: '20px'
                    }}/><br /><br />
                    <button type="submit" style={{
                        padding: '10px 20px',
                        backgroundColor: 'white',
                        color:'black'
                    }}>Sign In</button> 
                    or continue with
                    {/* Add other social media login options here */}
                </form> 
            </div>
        );
    }
}

export default LoginPage;
