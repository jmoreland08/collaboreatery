import Layout from "../../components/shared/Layout/Layout"
import { signIn } from '../../services/users'
import { useHistory } from "react-router-dom"
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
const ColorButton = withStyles((theme) => ({
  root: {
    backgroundColor: '#FFB332',
    borderRadius: '25px',
    '&:hover': {
      backgroundColor: '#00D680',
    },
  },
}))(Button);
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));
function SignIn(props) {
  const history = useHistory()
  const classes = useStyles();
    const [form, setForm] = useState({
        username: '',
        password: '',
        isError: false,
        errorMsg: ''
    })

    const handleChange = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSignIn = event => {
        event.preventDefault()

        const { setUser } = props

        signIn(form)
            .then(user => {
                setUser(user)
            })
            .then(() => history.push('/'))
            .catch(error => {
                console.error(error)
                setForm({
                    isError: true,
                    errorMsg: 'Invalid Credentials',
                    username: '',
                    password: ''
                })
            })
    }
    const { username, password } = form

  return (
    <Layout>
     <div className="form-container">
            
            <form onSubmit={onSignIn}>
            <h3>Sign In</h3>
                <input
                    required
                    type="text"
                    name="username"
                    value={username}
                    placeholder="Enter Username"
                    onChange={handleChange}
                />
              
                <input
                    required
                    name="password"
                    value={password}
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
          />
          <br/>
             <ColorButton variant="contained" color="primary" className={classes.margin}>
          Sign In
        </ColorButton>
            </form>
        </div>
    </Layout>
  )
}

export default SignIn;