The solution involves using conditional rendering and optional chaining:

```javascript
class MyComponent extends React.Component {
  state = {
    userData: null,
  };

  componentDidMount() {
    fetch('https://api.example.com/user')
      .then(response => response.json())
      .then(data => this.setState({ userData: data }));
  }

  render() {
    const { userData } = this.state;
    return (
      <View>
        {/* Conditional Rendering */}
        {userData ? (
          <Text>{userData.name}</Text>
        ) : (
          <Text>Loading...</Text>
        )}

        {/* Optional Chaining */}
        <Text>{userData?.name || 'Loading...'}</Text>
      </View>
    );
  }
}
```

Conditional rendering ensures that the component only attempts to access `userData.name` when `userData` is not `null`. Optional chaining (`userData?.name`) provides a more concise way to handle the potential absence of `userData` or its `name` property.