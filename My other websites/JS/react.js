<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>React</title>

		<script src="https://unpkg.com/react@17/umd/react.development.js"></script>
		<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>

		<!-- Don't use this in production: -->
		<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
	</head>
	<body>
		<div id="app"></div>
		<div id="toggleButton"></div>

		<script type="text/babel">
			const Names = props => {
				// const [showNameState, setShowNameState] = React.useState(true);

				const names = ["Olvieir", "Marcin", "Radek"];
				const namesList = names.map(name => <li key={name}>{name}</li>)
				// const showNames = true;
				// const toggleNames = () => setShowNameState(!showNameState)


				return (
					<div>
						{props.test ? <ul> {namesList} </ul> : "Brak imion"}

					</div>
				)
			}

			class Headline extends React.Component {
				state = {
					title: 'ReactJS',
					showNames: true
				}

				toggleNames() {
					this.setState({showNames: !this.state.showNames })
				}

				render() {
					const changeTitle = () => this.setState({title: 'Vue' })
					

					return (
						<div>
							<h2> Hello {this.state.title} </h2>
							<Names test={this.state.showNames}/>
							<button onClick={changeTitle}>Change Title </button>
							<button onClick={() => this.toggleNames()}> Toggle names </button>
						</div>
					)
				}
			}
			ReactDOM.render(<Headline />, document.querySelector("#app"));
		</script>
	</body>
</html>
