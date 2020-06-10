import React, { useEffect, useState, memo } from 'react';
import Preloader from '../Common/Preloader';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import { SetUserThunk } from '../redux/thunk/userThunk';

const WrapperUsers = styled.div`
	width:100%;
	display:flex;
	flex-wrap: wrap;
	flex-direction:column;
	min-height:100%;
	justify-content: space-between;
	.pagination{
		display:flex;
		width:100%;
		justify-content:center;
		align-items:center;
		margin:10px 0;
		li{
			list-style-type:none;
			border:2px solid black;
			cursor: pointer;
			padding:.5%;
			margin:0 1px;
			width:18px;
			height:18px;
			text-align:center
		}
		.active{
			background:black;
			color:white;
		}
		.previous ,.next{
			border:none;
			a{
				border: solid black;
    		border-width: 0 3px 3px 0;
    		display: inline-block;
    		padding: 3px;
				height:3px;
				width:3px;	
			}
		}
		.previous{
			a{
				transform: rotate(135deg);
			}
		}
		.next{
			a{
				transform: rotate(-45deg);
			}
		}
	}
`;
const User = styled.div`
	flex-wrap:wrap;
`;
const UserPhoto = styled.img`
	width:184px;
	height:184px;
`;
const UserName = styled.div`
	width:100%;
	font-size:20px;
	font-family: 'Lexend Tera', sans-serif;
	text-decoration:none;
`;
const NavLinkA = styled.a`
	margin: 20px 0;
	text-align: center;
	width: 33%;
	flex-wrap: wrap;
	text-align:center;
	text-decoration:none;
	color:black;
`;
const UsersWrap = styled.div`
	width:100%;
	display:flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const Users = ({ users, fetching, ...props }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const pageCount = Math.ceil(users.length / 9)

	const setPage = (e) => {
		setCurrentPage(++e.selected)
	}

	useEffect(() => {
		props.SetUserThunk()
	})

	return (
		<>
			{
				fetching
					? <Preloader />
					: <WrapperUsers>
						<UsersWrap>
							{users.map((userItem, index) => {
								return (index < 9 * currentPage && index >= (9 * currentPage) - 9) ?
									<NavLinkA href={userItem.html_url} key={index}>
										<User>
											<UserPhoto src={userItem.owner.avatar_url} />
											<UserName>{userItem.name}</UserName>
										</User>
									</NavLinkA>
									: ""
							}
							)}
						</UsersWrap>
						<ReactPaginate
							previousLabel={""}
							nextLabel={""}
							breakLabel={"..."}
							breakClassName={"break-me"}
							pageCount={pageCount}
							marginPagesDisplayed={2}
							pageRangeDisplayed={3}
							onPageChange={setPage}
							containerClassName={"pagination"}
							subContainerClassName={"pages pagination"}
							activeClassName={"active"} />
					</WrapperUsers>
			}
		</>
	);
};

const mapStateToProps = state => {
	return {
		users: state.users,
		fetching: state.fetching
	}
}

export default compose(
	memo,
	connect(mapStateToProps, { SetUserThunk })
)(Users);