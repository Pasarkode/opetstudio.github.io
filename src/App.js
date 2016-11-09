import React, {Component} from 'react';
// import logo from './logo.svg';
import './index.css';

import {Grid, Navbar, Jumbotron, Button, Panel} from 'react-bootstrap';
import HelloWorld from './tutorial/helloworld/HelloWorld';
import ShoppingList from './tutorial/shoppinglist/ShoppingList';
import Timer from './tutorial/timer/Timer';
import TodoApp from './tutorial/todo/TodoApp';
import MarkdownEditor from './tutorial/markdown/MarkdownEditor';
import FilterableProductTable from './tutorial/thinkingreact/FilterableProductTable';
import Game from './tutorial/tictacgame/Game';


class App extends Component {
    render() {
        return (
            <div>
                <Navbar inverse fixedTop>
                    <Grid>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="/">React App</a>
                            </Navbar.Brand>
                            {/* <Navbar.Toggle/> */}
                        </Navbar.Header>
                    </Grid>
                </Navbar>
                <Jumbotron>
                    <Grid>
                        <h1>Welcome to React</h1>
                        <HelloWorld text='website ini adalah contoh output dari tutorial dasar react js.'/>
                        <ShoppingList name="Mark" />

                        <p>
                            <Button bsStyle="success" bsSize="small" href="https://facebook.github.io/react/docs/hello-world.html" target="_blank">
                                Klik, untuk menuju ke halaman documentasi react js
                            </Button><br/>
                            <Button bsStyle="info" bsSize="small" href="https://github.com/opetstudio/opetstudio.github.io" target="_blank">
                                Klik, untuk menuju ke halaman github
                            </Button>
                        </p>
                    </Grid>
                </Jumbotron>

                <Grid>
                  <Panel header="TIMER application">
                    <Timer />
                  </Panel>
                </Grid>

                <Grid>
                  <Panel header="TODO application">
                    <TodoApp />
                  </Panel>
                </Grid>

                <Grid>
                  <Panel header="Contoh penggunaan librari remarkable kedalam react">
                    <MarkdownEditor />
                  </Panel>
                </Grid>
                <Grid>
                  <Panel header="Filterable Product Table application">
                    <FilterableProductTable />
                  </Panel>
                </Grid>
                <Grid>
                  <Panel header="Game tic-tac-toe">
                    <Game />
                  </Panel>
                </Grid>
            </div>
        );
    }
}

export default App;
