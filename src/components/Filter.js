import React from "react";
import styled from "styled-components";
import oc from "open-color";
import FaApple from "react-icons/lib/fa/apple";
import FaFeed from "react-icons/lib/fa/feed";
import FaFlask from "react-icons/lib/fa/flask";
import FaHeartbeat from "react-icons/lib/fa/heartbeat";
import FaRecycle from "react-icons/lib/fa/recycle";

const Wrapper = styled.div`
    text-align: left;
    margin: 50px 0;
`;

const FilterBox = styled.li`
    list-style: none;
`;

const FilterItem = styled.div`
    width: 150px;
    height: 150px;
    
    border-radius: 100%;
    background: ${oc.gray[3]};
    
    &:hover {
        background: ${oc.gray[2]};
    }
    
    transition: background 1s ease;
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FilterUl = styled.ul`
    margin: 0;
    padding: 0;
    
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const Filter = () => {
    return (
        <div>
            <Wrapper>
                <FilterUl>
                    <FilterBox>
                        <FilterItem>
                            <FaRecycle size={70} color="white"/>
                        </FilterItem>
                    </FilterBox>
                    <FilterBox>
                        <FilterItem>
                            <FaHeartbeat size={70} color="white"/>
                        </FilterItem>
                    </FilterBox>
                    <FilterBox>
                        <FilterItem>
                            <FaApple size={70} color="white"/>
                        </FilterItem>
                    </FilterBox>
                    <FilterBox>
                        <FilterItem>
                            <FaFeed size={70} color="white"/>
                        </FilterItem>
                    </FilterBox>
                    <FilterBox>
                        <FilterItem>
                            <FaFlask size={70} color="white"/>
                        </FilterItem>
                    </FilterBox>
                </FilterUl>
            </Wrapper>
        </div>
    )
}

export default Filter;