// var MemberPabel = React.createClass({
// 
//     render: function() {
// 
//         // Here we will read the items property, which was passed
//         // as an attribute when the component was created
// 
//         var self = this;
// 
//         // The map method will loop over the array of menu entries,
//         // and will return a new array with <li> elements.
// 
//         return (
//             <div>
//                 <ul>{ this.props.items.map(function(m, index){
//         
//                     var style = '';
//         
//                     if(self.state.focused == index){
//                         style = 'focused';
//                     }
//         
//                     // Notice the use of the bind() method. It makes the
//                     // index available to the clicked function:
//         
//                     return <li className={style} onClick={self.clicked.bind(self, index)}>{m}</li>;
//         
//                 }) }
//                         
//                 </ul>
//                 
//                 <p>Selected: {this.props.items[this.state.focused]}</p>
//             </div>
//         );
// 
//     }
// });
