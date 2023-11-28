import logo from './logo.svg';
import './App.css';
import './style.css';
//import "./src/fontawasome.js"
class App extends React.Component {
  render() {
    return(
      <div className='App'>
<div className="container">
    <h1>{{main.title}}</h1>
    <div class="input-group">
        <span class="input-group-addon">
            <span class="glyphicon glyphicon-search"></span>
        </span>
        <input type="text" class="form-control" ng-model="main.searchInput"/>
    </div>
    <h3>A list of Books</h3>
    <ul class="list-group">
        <li class="list-group-item" ng-repeat="show in main.shows | filter:main.searchInput | orderBy:main.order.key:main.order.reverse"><span class="glyphicon glyphicon-star" ng-if="show.favorite"></span> {{show.title}} <span class="badge">{{show.author}}</span></li>
    </ul>
    <select class="form-control pull-right" ng-model="main.order" ng-options="order as order.title for order in main.orders"></select>
    <div class="clearfix"></div>
    <h3>Add a new Book</h3>
    <form name="main.addForm" class="form" ng-submit="main.addShow()">
        <div class="form-group">
            <label>Title</label>
            <input type="text" class="form-control" ng-model="main.new.title" required />
        </div>
        <div class="form-group">
            <label>Author</label>
          <input type="text" class="form-control" ng-model="main.new.author" required />
        </div>
        <div class="row">
            <div class="col-xs-6">
                <label>Favorite: <input type="checkbox" ng-model="main.new.favorite" /></label>
            </div>
            <div class="col-xs-6">
                <button class="btn btn-success pull-right"><span class="glyphicon glyphicon-plus-sign"></span> Add</button>
            </div>
        </div>

    </form>
</div>
</div>
    );
  }
}