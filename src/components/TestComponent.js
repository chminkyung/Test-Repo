import React from 'react';
import { jsx, css } from '@emotion/core';
import atomize from "@quarkly/atomize";
import styled from '@emotion/styled';

const TestComponent = props => {
	return <div {...props}>
		      We HOHOHOHOHOHO
      III 
      
		<Color>
			asdsadasdasd
		</Color>
		    
	</div>;
};

export default atomize(TestComponent)({
	name: "TestComponent",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// paste here description for your component
		en: "TestComponent — my awesome component"
	},
	propInfo: {
		// paste here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});
const Color = styled.p`
  color: red;
  font-size: 20px
`;