import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { ThemeContext } from '../../ThemesContext';
import BreadcrumbComponent from '../../components/breadcrumb/Breadcrumb';

class Home extends React.Component {

    static contextType = ThemeContext;

    constructor(props) {
        super(props);
    }

    changeTheme = (e) => {
        this.props.changeTheme(e.currentTarget.checked);
    }

    render() {
        const themeName = this.context.name;
        let title = "Them has changed to " + themeName;

        return (
            <div>
                <BreadcrumbComponent />
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                            type="checkbox"
                            label={title}
                            onChange={this.changeTheme}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Home;