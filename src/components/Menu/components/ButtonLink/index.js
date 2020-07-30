import React from 'react';

function ButtonLink(props) {
	// props => {className: 'o className que a gente passar', href: 'mesma coisa'}

	return (
		<a href={props.href} className={props.className}>
			{props.children}
		</a>
	)
}

export default ButtonLink;