import { Breadcrumb } from 'react-bootstrap';

const BreadcrumbComponent = () => {
    return (
        <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/about">
                About
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
    );
}

export default BreadcrumbComponent;