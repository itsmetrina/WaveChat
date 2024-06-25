import moment from "moment"
import { chats } from "../../Data"
import { List, ListItemButton } from "@mui/material"

const ChatList = () => {
	return (
		<div>
			<List>
				{chats.map((chat) => (
					<ListItemButton key={chat.id}>
						<img src={chat.picture} alt={`${chat.name}'s picture`} />
						<div>{chat.name}</div>
						{chat.lastMessage && (
							<>
								<div>{chat.lastMessage.content}</div>
								<div>{moment(chat.lastMessage.createdAt).format("HH:mm")}</div>
							</>
						)}
					</ListItemButton>
				))}
			</List>
		</div>
	)
}

export default ChatList