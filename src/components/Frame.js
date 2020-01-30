import React, { Component } from 'react';

import 'antd/dist/antd.css';
import { Icon, Button, Form, Input } from 'antd';

const wrapper = {
    position: 'absolute',
    backgroundColor: '#F7F6F8',
    width: '886px',
    height: '672px',
    boxShadow: '30px 40px 40px rgba(95, 100, 130, 0.25)',
    borderRadius: '10px'
}

const header = {
    marginLeft: '56px',
    marginTop: '17px'
}

const content = {
    display: 'flex',
    marginLeft: '56px',
    marginTop: '20px',
    paddingLeft: '10px'
}

const verticalLine = {
    position: 'absolute',
    backgroundColor: 'red',
    width: '3px',
    height: '20px',
    borderRadius: '50px',
    top: '25px'
}

const title = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#161551',
    marginLeft: '10px'
}

const iconCloseForm = {
    position: 'absolute',
    right: '25px'
}

const formsBlock = {
    marginLeft: '30px'
}

const formLabel = {
    color: '#161551',
    fontSize: '14px',
    fontWeight: '600'
}

const inputForm = {
    display: 'block',
    width: '454px',
    height: '44px',
    borderRadius: '200px',
    fontSize: '12px',
    color: '#161551',
    fontWeight: '600',
    marginBottom: '15px',
    border: 'none'
}

const btnCancel = {
    width: '96px',
    height: '39px',
    marginRight: '10px'
}

const btnSave = {
    width: '96px',
    height: '39px'
}

const groupBtn = {
    width: '100%',
    textAlign: 'center'
}

class Frame extends Component {
    render() {
        return(
            <div style={ wrapper }>
                <div style={ header }>
                    <span style={ verticalLine }></span>
                    <span style={ title }>EDIT PROFILE INFO</span>
                    <span style={ iconCloseForm }>
                        <Icon type="close-circle" theme="twoTone" />
                    </span>
                </div>
                <div style={ content }>
                    <div>
                        <img src="https://miro.medium.com/max/560/1*MccriYX-ciBniUzRKAUsAw.png" alt="placeholder" width="100" height="100" />
                    </div>
                    <div style={ formsBlock }>
                    <Form>
                        <Form.Item>
                            <label style={ formLabel }>First Last Name</label>
                            <Input placeholder="First Last Name" style={ inputForm } />

                            <label style={ formLabel }>Email</label>
                            <Input placeholder="Email" style={ inputForm } />

                            <label style={ formLabel }>Current Password</label>
                            <Input type="password" placeholder="Current Password" style={ inputForm } />

                            <label style={ formLabel }>New Password</label>
                            <Input type="password" placeholder="New Password" style={ inputForm } />

                            <label style={ formLabel }>Confirm New Password</label>
                            <Input type="password" placeholder="Confirm New Password" style={ inputForm } />
                        </Form.Item>
                        <Form.Item style={ groupBtn }>
                            <Button ghost type="danger" style={ btnCancel }>Cancel</Button>
                            <Button type="danger" htmlType="submit" style={ btnSave }>Save</Button>
                        </Form.Item>
                    </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Frame;