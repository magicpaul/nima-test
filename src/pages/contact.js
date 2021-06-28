import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Section, Text, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Menu, StackItem, Stack, Formspree, SocialMedia } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"contact"} />
		<Helmet>
			<title>
				NIMA: NI Ministry Assembly
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/60871a736de461001eb8890a/images/nima%202.png?v=2021-04-26T20:34:38.222Z"} type={"image/x-icon"} />
		</Helmet>
		<Section background="--color-dark">
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Image width="64px" height="64px" src="https://uploads.quarkly.io/60871a736de461001eb8890a/images/nima%202.png?v=2021-04-26T20:34:38.222Z" />
				<Menu
					display="flex"
					justify-content="center"
					font="--base"
					font-weight="700"
					md-flex-direction="column"
					md-align-items="center"
					color="--green"
				>
					<Override slot="link" text-decoration="none" color="--green" padding="6px 12px" />
					<Override slot="link-active" color="--green" />
					<Override slot="item" padding="6px" color="--green" />
					<Override slot="link-index" color="--green">
						Home
					</Override>
				</Menu>
			</Box>
		</Section>
		<Components.QuarklycommunityKitBgImageParallax imageURL="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" filter="--grayscale">
			<Section
				background="linear-gradient(0deg,rgba(4, 8, 12, 0.6) 0%,rgba(4, 8, 12, 0.6) 100%)"
				padding="64px 0"
				sm-padding="40px 0"
				color="--light"
				font="--base"
			>
				<Components.QuarklycommunityKitBgImageParallax />
				<Stack>
					<StackItem width="75%" lg-width="100%">
						<Override slot="StackItemContent" flex-direction="column" />
						<Text font="--headline1">
							Contact
						</Text>
					</StackItem>
				</Stack>
			</Section>
		</Components.QuarklycommunityKitBgImageParallax>
		<Section>
			<Stack>
				<StackItem width="100%" lg-width="100%" lg-order="2">
					<Override slot="StackItemContent" text-align="center" />
					<Stack>
						<StackItem width="50%" md-width="100%">
							<Override
								slot="StackItemContent"
								background="--color-green"
								padding="20px"
								flex-direction="column"
								align-items="center"
								justify-content="center"
								align-content="center"
								text-align="left"
							/>
							<Text color="--light" letter-spacing="1px" text-transform="uppercase" margin="0">
								The NIMA Steering Group
							</Text>
							<Text
								color="--light"
								as="h3"
								font="--headline2"
								md-font="--headline3"
								margin="0"
							>
								The Steering Group come from a variety of traditions, but with a united goal - to encourage and equip preachers.
							</Text>
						</StackItem>
						<StackItem width="25%" md-width="50%">
							<Override slot="StackItemContent" background="--color-lightD1" padding="20px" flex-direction="column" />
							<Box
								width="170px"
								height="170px"
								margin="0 auto"
								background="url(https://uploads.quarkly.io/60871a736de461001eb8890a/images/moore_casement_smaller_and_clear.jpeg?v=2021-06-26T21:07:08.651Z) 50% 50%/cover no-repeat scroll"
								border-radius="50%"
							/>
							<Text as="h3" font="--headline3" margin="20px 0 5px 0">
								Moore Casement
							</Text>
							<Text color="--grey" margin="0">
								Director,{" "}
								<Link
									href="http://www.cornhillbelfast.org/"
									color="--green"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Cornhill Belfast
									<br />
								</Link>
								(Chair).
							</Text>
						</StackItem>
						<StackItem width="25%" md-width="50%">
							<Override slot="StackItemContent" background="--color-lightD1" padding="20px" flex-direction="column" />
							<Box
								width="170px"
								height="170px"
								margin="0 auto"
								background="url(https://uploads.quarkly.io/60871a736de461001eb8890a/images/lee-campbell.jpeg?v=2021-06-26T21:21:28.357Z) 50% 0/cover no-repeat"
								border-radius="50%"
							/>
							<Text as="h3" font="--headline3" margin="20px 0 5px 0">
								Lee Campbell
							</Text>
							<Text color="--grey" margin="0">
								Pastor,{" "}
								<Link href="http://www.sbchurch.co.uk/" color="--green">
									Strandtown Baptist Church
								</Link>
								,
							</Text>
						</StackItem>
						<StackItem width="25%" md-width="50%">
							<Override slot="StackItemContent" background="--color-lightD1" padding="20px" flex-direction="column" />
							<Box
								width="170px"
								height="170px"
								margin="0 auto"
								background="url(https://uploads.quarkly.io/60871a736de461001eb8890a/images/john-graham.jpeg?v=2021-06-26T21:27:02.881Z) 50% 0/cover no-repeat"
								border-radius="50%"
							/>
							<Text as="h3" font="--headline3" margin="20px 0 5px 0">
								John Graham
							</Text>
							<Text color="--grey" margin="0">
								{" "}
								<Link href="https://www.hillstreetchurch.net/" color="--green">
									Hill Street Presbyterian, Lurgan
								</Link>
							</Text>
						</StackItem>
						<StackItem width="25%" md-width="50%">
							<Override slot="StackItemContent" background="--color-lightD1" padding="20px" flex-direction="column" />
							<Box
								width="170px"
								height="170px"
								margin="0 auto"
								background="url(https://uploads.quarkly.io/60871a736de461001eb8890a/images/andy-hambleton.jpeg?v=2021-06-26T21:42:34.596Z) 50% 0/cover no-repeat"
								border-radius="50%"
							/>
							<Text as="h3" font="--headline3" margin="20px 0 5px 0">
								Andy Hambleton
							</Text>
							<Text color="--grey" margin="0">
								Minister,{" "}
								<Link href="http://crumlinepc.co.uk/" color="--green">
									Crumlin Evangelical Presbyterian Church{" "}
								</Link>
							</Text>
						</StackItem>
						<StackItem width="25%" md-width="50%">
							<Override slot="StackItemContent" background="--color-lightD1" padding="20px" flex-direction="column" />
							<Box
								width="170px"
								height="170px"
								margin="0 auto"
								background="url(https://uploads.quarkly.io/60871a736de461001eb8890a/images/phil-howe.jpeg?v=2021-06-26T21:46:09.734Z) 50% 0/cover no-repeat"
								border-radius="50%"
							/>
							<Text as="h3" font="--headline3" margin="20px 0 5px 0">
								Phil Howe
							</Text>
							<Text color="--grey" margin="0">
								<Link href="https://quarkly.io/preview#/http://suni.co.uk/" color="--green">
									Scripture Union NI
								</Link>
								{" "}Training and Resources Manager
							</Text>
						</StackItem>
						<StackItem width="25%" md-width="50%">
							<Override slot="StackItemContent" background="--color-lightD1" padding="20px" flex-direction="column" />
							<Box
								width="170px"
								height="170px"
								margin="0 auto"
								background="url(https://uploads.quarkly.io/60871a736de461001eb8890a/images/dj.webp?v=2021-06-26T21:51:56.669Z) 50% 0/cover no-repeat"
								border-radius="50%"
							/>
							<Text as="h3" font="--headline3" margin="20px 0 5px 0">
								David Johnston
							</Text>
							<Text color="--grey" margin="0">
								Minister (retired),{" "}
								<Link
									href="http://www.hrpc.org.uk/"
									color="--green"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Hamilton Road Presbyterian Church
								</Link>
							</Text>
						</StackItem>
						<StackItem width="25%" md-width="50%">
							<Override slot="StackItemContent" background="--color-lightD1" padding="20px" flex-direction="column" />
							<Box
								width="170px"
								height="170px"
								margin="0 auto"
								background="url(https://uploads.quarkly.io/60871a736de461001eb8890a/images/trevor.jpeg?v=2021-06-26T21:55:27.082Z) 50% 0/cover no-repeat"
								border-radius="50%"
							/>
							<Text as="h3" font="--headline3" margin="20px 0 5px 0">
								Trevor Johnston
							</Text>
							<Text color="--grey" margin="0">
								Rector,{" "}
								<Link href="http://ascbelfast.com/" color="--green">
									All Saints Church of Ireland
								</Link>
								, Belfast
							</Text>
						</StackItem>
					</Stack>
				</StackItem>
			</Stack>
		</Section>
		<Section background="--color-light" color="--dark" padding="64px 0">
			<Stack>
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text
						font="--base"
						color="--grey"
						letter-spacing="1px"
						text-transform="uppercase"
						margin="0"
					>
						Contact
					</Text>
					<Text font="--headline2" max-width="500px" margin="10px 0 0 0">
						Email us, we would love to hear form you
					</Text>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Formspree endpoint="https://formspree.io/f/mzbyvdaq">
						<Stack gap="16px">
							<StackItem width="50%">
								<Override slot="StackItemContent" flex-direction="column" />
								<Text font="--base" margin="0 0 4px 0">
									Name
								</Text>
								<Input max-width="400px" width="100%" name="name" />
							</StackItem>
							<StackItem width="50%">
								<Override slot="StackItemContent" flex-direction="column" />
								<Text font="--base" margin="0 0 4px 0">
									Email
								</Text>
								<Input max-width="400px" width="100%" type="email" name="email" />
							</StackItem>
							<StackItem width="100%">
								<Override slot="StackItemContent" flex-direction="column" />
								<Text font="--base" margin="0 0 4px 0">
									Message
								</Text>
								<Input as="textarea" rows="4" width="100%" name="message" />
							</StackItem>
							<StackItem width="100%">
								<Button background="--color-green">
									Send
								</Button>
							</StackItem>
						</Stack>
					</Formspree>
				</StackItem>
			</Stack>
		</Section>
		<Section
			background="--color-dark"
			padding="60px 0"
			sm-padding="40px 0"
			color="--light"
			hover-color="--green"
		>
			<SocialMedia facebook="https://www.facebook.com/nima.preaching" twitter="https://twitter.com/nimapreaching" instagram="http://www.instagram.com/niministry_assembly">
				<Override
					slot="link"
					border-radius="50%"
					color="--light"
					hover-color="--green"
					background="transparent"
					hover-background="transparent"
					margin="0 8px"
				/>
			</SocialMedia>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});