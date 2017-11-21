import React from "react";
import FaUser from "react-icons/lib/fa/user";
import PropTypes from "prop-types";
import { commentReceiveRequest } from "../../../modules/CommentReceive";
import { connect } from "react-redux";
import { getCommentReceive } from "../../../selector";
import styled from "styled-components";
import oc from "open-color";

const propTypes = {
    CommentId: PropTypes.string.isRequired,
    CommentReceive: PropTypes.object.isRequired,
};

const defaultTypes = {
    CommentId: "",
    CommentReceive: {}
};

const Wrapper = styled.div`
    height: 15%;
    width: 100%;
    
    display: flex;
    flex-direction: row;
    
    position: relative;
    
    padding: 25px 25px;
    
    &:hover {
        background: ${oc.pink[1]};
        border: 2px solid ${oc.pink[1]};
    }
    
    transition: all 0.5s ease;
`;

const CommentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    
    padding-left: 30px;
`;

const Comment = styled.div`
    font-size: 15px;
    font-weight: 400;
`;

const NickName = styled.div`
    font-size: 18px;
    font-weight: 500;
    text-align: left;
    color: ${oc.gray[5]};
`;

const CommentIcon = styled.div`
    height: 40px;
    width: 40px;
   
    border-radius: 100%;
    
    background: ${oc.gray[2]};
    
    top: 10px;
    left: 20px;
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Line = styled.div`
    background: ${oc.gray[1]};
    height: 1px;
`;

export class ModalStudyComment extends React.Component {
    render () {
        const { CommentReceive } = this.props;

        return (
            <div>
            <Wrapper>
                <CommentIcon>
                    <FaUser size={25} color="white"/>
                </CommentIcon>
                <CommentWrapper>
                    {
                        !CommentReceive.pending && CommentReceive.data.length !== 0 &&
                        <NickName>
                            { CommentReceive.data[this.props.CommentId].NickName }
                        </NickName>
                    }
                    {
                        !CommentReceive.pending && CommentReceive.data.length !== 0 &&
                        <Comment>
                            { CommentReceive.data[this.props.CommentId].comment }
                        </Comment>
                    }
                </CommentWrapper>
            </Wrapper>
            <Line />
            </div>
        )
    }
}

ModalStudyComment.propTypes = propTypes;
ModalStudyComment.defaultTypes = defaultTypes;

export default connect(
    state => ({ CommentReceive: getCommentReceive(state) }),
    { commentReceiveRequest }
)(ModalStudyComment);

