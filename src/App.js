
import './css/style.css';
import './fontawesome-5/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './fontawesome-5/css/all.min.css'
import Menu from './Menu';
import Content from './Content';
function App(token) { 
  console.log("token avy aty app = " + token.tokenEmail)
  return (
        <div>
          <header>
              <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                      <a className="navbar-brand" href="#">Ressource Humaine</a>
                    </div>
                    <div className='col-offset-2'>
                      <form>
                        <input type="text" placeholder='search...' name="search"/>
                        <label htmlFor='submit'> <i className='fas fa-search'></i> </label>
                        <input id='sumbit' type="submit" />
                      </form>
                    </div>
                    <div className='users'>
                      <i className='fas fa-user'></i>
                      <span>
                          Users
                      </span>
                    </div>
                </div>
              </nav>
          </header>
            <Menu token = {token.tokenEmail}/>
        </div>
  );
}
export default App;
