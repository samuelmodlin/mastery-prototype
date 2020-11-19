/*MIT License
Copyright (c) 2018 Shama Hoque
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
documentation files (the "Software"), to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES 
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE 
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR 
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import auth from './../auth/auth-helper'
import {Link, withRouter} from 'react-router-dom'
import Sidebar from './Sidebar'


const isActive = (history, path) => {
  if (history.location.pathname == path)
    return {color: '#ff4081'}
  else
    return {color: '#ffffff'}
}



const Menu = withRouter((props) => (
  <AppBar position="static">
    <Toolbar>
      <Sidebar 
        left="false"
      />
      <Typography style={{flex: '1'}} variant="h6">
        Mastery Gradebook
      </Typography>
      <Link to="/users">
        <Button style={isActive(props.history, "/users")}>Users</Button>
      </Link> 
      {
        !auth.isAuthenticated() && (<span>
          <Link to="/signup">
            <Button style={isActive(props.history, "/signup")}>Sign up
            </Button>
          </Link>
          <Link to="/signin">
            <Button style={isActive(props.history, "/signin")}>Sign In
            </Button>
          </Link>
        </span>)
      }
      {
        auth.isAuthenticated() && (<span>
          <Link to={"/user/" + auth.isAuthenticated().user._id}>
            <Button style={isActive(props.history, "/user/" + auth.isAuthenticated().user._id)}>My Profile</Button>
          </Link>
          <Button color="inherit" onClick={() => {
              auth.clearJWT(() => props.history.push('/'))
            }}>Sign out</Button>
        </span>)
      }
    </Toolbar>
  </AppBar>
))

export default Menu 
