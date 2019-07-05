import * as React from 'react';
import '../../../../fdk-designsystem-bootstrap4/scss/common.scss';
import '../../../../fdk-designsystem-bootstrap4/scss/colors.scss';
import '../../../../fdk-designsystem-bootstrap4/scss/portal.scss';

export interface IButtonProps {
  children?: React.ReactNode,
  onClick?: (e:any) => void
}
const styles = {
  // height: '20px',
  // width: '200px',
  // border: '1px solid #eee',
  // borderRadius: 3,
  // backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  //padding: '3px 10px',
  marginBottom: 10,
};
export const ButtonAdd: React.SFC<IButtonProps> = (props) => (
  <button className="fdk-button fdk-button-add-concept btn btn-primary" onClick={props.onClick} style={styles} type="button">
        <svg className="fdk-icon-add mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
        <defs />
        <title>icon-add-cicle-sm</title>
        <g id="outline">
          <circle className="cls-1" cx="8" cy="8" r="7" />
          <path className="cls-2" d="M11,7H9V5A1,1,0,0,0,7,5V7H5A1,1,0,0,0,5,9H7v2a1,1,0,0,0,2,0V9h2a1,1,0,0,0,0-2Z" />
        </g>
      </svg>
      {props.children}
  </button>
);
