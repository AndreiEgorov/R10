import react, { Component } from "react";

class ConductRule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }

  showText() {
    this.setState({
      isLoaded: !this.state.isLoaded
    });
  }

  render() {
    return (
      <View key={index}>
        <TouchableOpacity onPress={this.showText.bind(this)}>
          <Text style={styles.sectionTitle}>{object.title}</Text>
        </TouchableOpacity>

        <View
          style={
            this.state.isLoaded ? { display: "flex" } : { display: "none" }
          }
        >
          <Text style={styles.plainText}>{object.description}</Text>
        </View>
      </View>
    );
  }
}
export default ConductRule;
