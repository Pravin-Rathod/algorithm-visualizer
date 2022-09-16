import React from "react";
import { bubbleSortAnimation} from "./components/sortingMethods/bubbleSort"
import { selectionSortAnimation } from "./components/sortingMethods/selectionSort";
import { insertionSortAnimation } from "./components/sortingMethods/insertionSort";
// import { mergeSortAnimation } from "./components/sortingMethods/mergeSort";
import { mergeSort } from "./components/sortingMethods/msort";
import { quickSortAnimation } from "./components/sortingMethods/quicksort";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      maxSize: 100,
      maxSpeed: 500
    };
  }

  componentDidMount() {
    this.resetArray(this.maxSize);
  }

  resetArray(size) {
    const array = [];
    for (let i = 0; i < size ; i++) {
      array.push(randomInt(5,350));
    }
    this.setState({ array });
  }

  getArray() {
    return this.state.array;
  }
  
  render() {
    let array = [];
    array = this.getArray()

    return (
      <div>
        <div className="nav">
          <button id="bubbleSort" onClick={() => bubbleSortAnimation(array,this.state.maxSpeed)} className="sbtn">BubbleSort</button>
          <button id="selectionSort" onClick={() => selectionSortAnimation(array,this.state.maxSpeed)} className="sbtn">SelectionSort</button>
          <button id="insertionSort" onClick={() => insertionSortAnimation(array,this.state.maxSpeed)} className="sbtn">InsertionSort</button>
          <button id="mergeSort" onClick={() => mergeSort(array,this.state.maxSpeed)} className="sbtn">MergeSort</button>
          <button id="quickSort" onClick={() => quickSortAnimation(array,this.state.maxSpeed)} className="sbtn">QuickSort</button>
        </div>
        <hr></hr>

        <div className="array-container">
          {array.map((value, idx) => (
            <div className="array-item" key={idx} style={{ height: `${value}px` }}></div>
          ))}
        </div>
        <div className="footer-container">
          <hr></hr>
          <div className="footer">
            <div className="footer-input">
              <p>Array size : </p>
              <input id="maxSize" type="range" min={5} max={200} value={this.state.maxSize} onChange={(e)=>{this.resetArray(e.target.value);this.setState({maxSize:e.target.value})}}/>
            </div>
            <div className="footer-input">
              <p>Array Speed : </p>
              <input id="maxSpeed" type="range" min={0} max={1000} value={this.state.maxSpeed} onChange={(e)=>this.setState({maxSpeed:e.target.value})}/>
            </div>
            <button id="resetBtn" onClick={() => this.resetArray(this.state.maxSize)} className="btn">Generate Array</button>
          </div>
        </div>
      </div>
    )
  }
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}