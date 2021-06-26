import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Section, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Menu, StackItem, Stack, SocialMedia } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
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
		<Components.QuarklycommunityKitBgImageParallax imageURL="https://images.unsplash.com/photo-1558541966-d1071f7329bd?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000">
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
							Equipping and{" "}
							<br />
							Encouraging Preachers
						</Text>
					</StackItem>
				</Stack>
			</Section>
		</Components.QuarklycommunityKitBgImageParallax>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Stack color="--grey" font="--base">
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text
						margin="0px"
						font="--headline1"
						md-font="--headline2"
						color="--green"
						border-color="--color-green"
					>
						NIMA
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						The Northern Ireland Ministry Assembly (NIMA) commenced in 2006. The aim of our assembly is to encourage and help preachers to give themselves to the indispensable work of presenting the Lord Jesus Christ to believers and unbelievers, to all ages, and to all kinds of people. We want to encourage a fresh commitment to expository preaching that will fill our churches with a hunger for God and his Word and lead to a new desire for mission.
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						We look forward to welcoming delegates from far and near. We firmly believe that when the Bible is opened and taught faithfully and relevantly the voice of God is heard in a living and powerful way. We therefore seek to encourage those engaged in preaching to see the expounding of Scripture as the pressing need in today's church and help equip them in the exacting work involved in such a ministry.
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						While the assembly, therefore, is mainly for those in current full-time preaching ministries, others are welcome, especially students and spouses of Christian workers
						<br />
						<br />
						As well as the annual assembly the{" "}
						<Link
							href="http://www.niministryassembly.org.uk/contact.php"
							color="--green"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Steering Group
						</Link>
						{" "}are seeking other means by which they might encourage this task such as helping to support other conferences and running preaching conferences.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section background="--color-green" padding="64px 0" sm-padding="40px 0">
			<Stack>
				<StackItem width="50%" lg-width="100%">
					<Override
						slot="StackItemContent"
						color="--dark"
						padding="98px 64px"
						background="--color-light"
						flex-direction="column"
					/>
					<Text
						as="h4"
						margin="12px 0"
						font="--headline3"
						color="--green"
						letter-spacing="1px"
						text-transform="uppercase"
					>
						NIMA 2020
					</Text>
					<Text as="h2" margin="12px 0" font="--headline2" md-font="--headline3">
						CONSIDER JESUS
					</Text>
					<Text font="--base">
						Preparations are underway for NIMA 2020 on Monday 9th and Tuesday 10th November at Maze Presbyterian Church. Our two speakers this year are Dr. Sinclair Ferguson and Dr. Conrad Mbewe. Sinclair needs no introduction having visited Northern Ireland on many occasions and written numerous books. Conrad may be less well known to some. He is the senior pastor of Lusaka Baptist Church in Zambia and has been a plenary speaker at many conferences, including The Gospel Coalition National Conference and the Bethlehem Conference for Pastors and Church Leaders. He has been dubbed ‘the Spurgeon of Africa’ and is an excellent expositor.
						<br />
						<br />
						The theme of this year’s Assembly is CONSIDER JESUS focussing on the Letter to the Hebrews. It promises to be a spiritual feast and for those bereft of fellowship during a very protracted lockdown it should be a welcome oasis.
					</Text>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Stack>
						<StackItem width="50%" lg-width="33.3%" md-width="50%" sm-width="100%">
							<Override slot="StackItemContent" padding-bottom="100%" background="url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIVFRgVERUYGBgYGBoYGhwYGBgYGhgVGBwZHBgcGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHDQrISw0NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBQYEBwj/xABBEAABAwIDBQQHBgQFBQEAAAABAAIRAwQSITEFQVFhcQYigZEHEzKhscHwQlJigtHhFDNycyOSorLxFzRDwtMV/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAJBEBAQEBAAEEAwACAwAAAAAAAAECESEDEjFRBCJBE4EyM3H/2gAMAwEAAhEDEQA/ANFCcNUmFPhUVHCfCpISARAYU+FHCUIAwpYUcJQgDClhUkJQqIsKYtSr16bP5j2tnTEQJ6cVV1e0do12HGTnHdaSBPPghxZlqHCqt3aa1BgucPymOqlZt+1JgVAOocB5xl4p2HK7XNTFqZt3Sdk17CeTmo2kES0gjkQUREQhLVMQhIQQkISFMQhIRUJCEhSkISEEZagIUpCYhRURCEtUpahIQRFqYtUhCYhBHCSOEkGgATwjwpQiBhOGogE8KgITwihPhQBCWFHCF7g0FzjAAknkgaFTbZ25TpMIpua5+gGoHPms72i7TF5wUSQw5Ze0+d87hqqGTil5/c/IcuSza1Mum4uKjyXvcS4znp5Dz0UDGHUiOGRk/JOHAiJgyJ5DP9/JJ4wngJyKjSJ9EzOccyP10UEkkhpH7dY6pzWduJJPEgxv0T0GOdmY8BHy1UWRJTYDwnkdCpadetTIdTe5pkZg6+B14weCidbVImPEb+vBPb1DIDhvjx3fI+ATpctDYdryMq7J/EzI7tWlaKw2lSrgmm4EjVuWIdRw5rzupUaHOAAicp3Zcdx0XI26dTeHsfhe0yDMabjuj48lqaYuXrJCAhVHZ7tDTuQWEBtRokt3OG8t5aeauiFplCQhIUpCEtQREJiEZCEhACEhSEJiFFRFqYhSEJoQRwkjwpINAAnhOAiAVQMJQjhKEAwlCOE0IAWI7S7YNUuZTdFJuTt2N0mfyiNN6ve020cDBSpnvvy1jCz7Tid2QKwPaF4a1rWfaz+Qk+APis2/xqT+uNjSWurGcIOEeOg66eC5H3RJzGXwHgmF0fVBm7GXHnk0D4FFa0MWpy6aqLHVTecJG/WOMT+/mull2XNAI00zHAaHeFGbWMhI/XjO5SNtyczkemvNZtjpM0bKQ1JEcJwjxUtOiNAeO6AOgUbLd5+0TwncTw5rTbH2XJxO0BnPj9BY1rjecVz7P2cXNmpOE6funvdgE96kBI3cQtSKPT9kbGACIXH33rv/AI5x5ftCwqNdGEjiCPrefcqu8ouBOUfX/K9dubFr4MCRp+hWZ25siRMAEa7st67Z9Rx36X0wmzX1KVRr2HNhBHUHToRI8165Y3batNtRujhpwO9eem2bGeRGY6HOD5ETugcVcdk9pAVPVk918xO5+vmcx1jiu0rz6y2DghIUhCEhac0RCEhSEISEVEQmhSEISgApkRTFRTJJJINEAnCKEoVQ0JI4ShAEJOyzKOFz3z8LHHl8ckGE2pcY31Kx+zDYGveAAz4wY5LK3OJ7i45ZgDpuA5ZT4dFf7XLmteDEF+n3ng948+8fIHgqq3HeAdnMuJ4nQLFvI6SdvHNbbLdI4YR4fur6w2QToBlAXVbMBOQ+voq6sMl59br05xIrX7DfOIxAB81zi0dJyEDWfcMt617WtOolO22Z90LHurp7Yzths9ziDGW7L3haOhbYBAUgYpmPClvWpJPghRyTlqJrydEWW8/NZOud7Vx3VIO1A6qyc1cVc5pPFPmMVta0LC4N4Tx8B78lQ0gWODqftNIceoOR84W220xjoDt3msld0cLy4ZyPlB+HmvZi+Hi3OVv9n3YrU21GiJ1HAjVTOCoex1zLalP7jg4cw/8Adp81oiF1jjUJCAqQhC5ERkISEZQlFAQmIREJiEAwknhJQaSEoRQmhUIJQkAnhAMLi2yP8F54AHxkKxXLtCnipvbxadMkqx51tFmKoWuIDRLjBOYIJAHNzj5HkqoswvcD9nu+I+irF1Evv302xhxDEdIDWFzoy4T9BcFV0vJ0nIDWN0E8f3WNTw6Yv7LrZb1b29SFS2DO4HcZHiOHmrO2GcFeTU8vZir2iVMJXJbuXXTdry/4WGxFpSa7gE4Eo2szzVB0mTqpydyhpPCC6vabG4ictMuPCFZGdVIuC7dmqS67UAPGH2d47vHcSu3/APSp1QCw58NcxrolzYmdRV7ba8uBDQRPiqq5pw3PNzQSBn1I881qLmkHtPHd1WP/AIhza0O0h3umOunvXf072OHqzldXZKu4XEN0e3PpGIeRyW5cFgdjXXqrhpb7MEOn7pG4nwW/1Ervl5tfKJzVE4KchRuCrKIhCQpHBCQgjhCpChKKBJGkg0iSeEoQMAnhJOgFR3AOB2HI4THWFNCZ4kQg80v6kXJcxsONN7ieLnw0ZngwHxcqbaADHMYNcI+X6/UK67R1Awse0nJxD+GR0POGxHJUN7RdWuMTAXNLgG5bny4DrkSsa+G8/LSWDB/D03k/bqA8owkfNdlrdUpnEs/fYmUy2Hw0mSMhjjPrv088lQfxbzkzF4fquOsd8vRN88R6ZSvaZOR/Vdjbmm4ENeJ+a8sa9/2i7IExJGW85HRd1pcFmZcBAyDi6eUYsli4jed16BY7QDnObvYYPXUfFdO0b5tNuJxy85PABYnsxWe99QsIBJBLnNLtdO7MaAD5LRbQLmlhuCxzCHAENLcL8OUiSDIxZ/qs2cvHSa7OqjanaOr/AOJuERviZ6D9fBUzRdV9STPExPiMwOUq72hs/ul1MtjjlvzEHSI3qkvNiPqMHq3nHnPeI4RmeEe9azYzrN+flfbO2AGQapDstIEDpOqm2kwME02N7sGMm6EzmBlln4KusNiV2MJfVe15M9w90CNAw92J5K3srWqJbUAd+IDUfiG4qXXPHekz47ziK3/i3ziexgzjAwk58XPy9yo61ECsQ97yd+Qyk8gPorbPZAVRcWbXVA4tBk/XyTOvKaz2OqnS7gwAQBwzdz5K0tahc3PUZGVE+lgjhEKWzbAP1xW/S1+x6+Z/j79JCFGQpiEDgvU+egcEJCle1RkIIyEBClhAQihSTwkg00JQnhKEQyUJ4ShA0JJ0oQYbttb0A5rMEPqHGTJjIxMaTP1vVdsrYGJ7BTc9pDHmRgIDx3QTiaSIE6byFa+kizcWUqzJxMcWEjcHCR7wfNRdj9o4mvxtAcxjWTvcHuMk8DkM1jvnld5n9ZYpu0cNLKbMminTDmkzDsMmCdMydMlRUwZwN7o3u5ncOa0lxbd8h+4kRwAMDqIynkip7OzJYAActAfHPcuGteXbGFTbbBYXYy9/AwYLmnVpIOYU/aJ9MxhZiIEA8ABloroWAG+fANHkFwbYYxjIy4rE1bXX2ZzPCPsRTIxzxjLiAAfeCtXtS2FRhZlmMuo0+uaqOytGGYjvKvK572R3qav7ddM5/WRw2mzWiixmcNEZmTlxO/VRN2QWmWOIHL9CrMVWjMmPgV0Uw1wlpWK1zjhp0XDXPyn3Su+hRd58d6kZQg8EeMRHxU4zUFwMlTvPuPwVtcacVUE5u+uqSeT+LKoJYYzzbHUldNszInifhl+q4rZxwCc9HeMd0K0YyABwC9Po589ef8nX6yIyEDgpnBA4L0vEicFE4KZwQOCCBwQkKVwQEIgISRQmQaaE0J4ShAwCeEgE8IBTIoToK/bVn66hUpgSXMOH+sd5vvAXmmx6pa94zGJnvYR79fJetQvNe0WzTb3UgdypL2cnOkObPJx8iFz3P69Ho3xcnuXTVz1wN8gI+XmSumlcHQfQVXd1YeT+Fqksao1K82p5erN8ReNgDE5ZXb1b1j8DDDRm7pwVvtC7IYY4LGU6j4c7e4zHwTMXV8cekbNAbTbHAe9dVQyvPdmdoajGljw6Nx1haCwvqtSMIE8XHd0S5redyxoMBhcjrl1EguEMJADvuncHLmo2lcvmpXcR90NDcvkraoxr2YHiQREHhCly11YUbsObMqCpUzOaz9Ou6gcD5LJgP+Adw3KxFYOGSlTw63PkKtqe0fNT0ic1A/eeR+KzGa77JwIZ+UR0OquCqbZbXPwFrSAzMmIGpyB3lXZC9foz9Xj/ACLLqc+kTghIUpCjIXZ50RCBwUxCBwQQOagLVM4ICEEUJ0UJINGmhFCUIgYTwihNCBoQwjhMgZUvaq3pvtnmocOCHNdvDpAEddIV2uLa+zmXNJ1J5cA6M2xIIMgieYUvw1m81K8nvXkk82Aj3odnVSrLtFsZ1qabXPxgggPw4ZE6EScx1Vbsgw/CeK82px7Ma78OraLyW4RvElV1KiDlCudo2rg95jc0jjEASOOYKy9faDqZJcDkY0TM7PDerytPYbObqWzu3FWVKmKZgNgT5cPBZzZ+262eGmMoBz4xHxCt/wCOuXgdxoJMaE5+allWXP20TJc0Oy4lC+qAqCo+5EYqgYCDHdGojKJ+oUNC2uqjmzVLWQC44GhxdvDZkATv+CnGpe/DRE03gsyMiDO8cCotm2mFhEkwS3jkCR8lymw9U7GwmDBILic1bWLxhPPPxKx8rfAGMyMTv+KiuRA812U/Znqq6+qZxwCkSrns/d06lEYDOBz2OG9r2uMg+4jkQrIrx3ZXaarYXNfuB7H1Hh7C7D32vcMTXQYOo0zy4Lf7F7aWdyQ3H6t5juVIbJO5rpwu+PJe+TkfO1e1oSEJClIQEIiIhCQpCEJCqIXBAQpiEDgghSUiSC/ShOnhEMmTpIGhKE6SAYSIRJkGe7abONW2cWiXU++Og9r3Z+C8spPwvDhxXuZC8f7W7HNtXIaO4842HlvbPEFcvUz/AF39LfPDRXLmupteIkD3fXxWWvKjA/MCDnu1Vjsy+DqcHXTw4LmZRa8ua4CJ8lwk49feuq1t6OrTGKCY0PCfrcuoerg95x3kDj5rko7LYwTLh0dkrO3s4ggDxzTrpLfqHs30BmGAn8X6KwYC7OIHSPcit7SM4HkugsWdVe2/KCs2QRG73KOkwMBhTxCjHeIG4ZlZKndkzoFX2NP1lZrdxfJ/paZP6Ke/rw2B0HVdNjS/h7Wpcu1wPc3+hjSQfzOg+AXTGe1w9XXty8b2u/FXrOH2q1V3gXuI+Kr3sn6+KmceOu/qhK9rwr3YHbG8tQGNcH0xkGPkho/A4Zt6Zjkt9sf0g2daG1poP/H3mE8ngZfmAXkLgmCI+iWPa4BzCHNOYIIII5EapOC8G2Xtm6tjNvVcwb2zLT1Y6Wk84lbXZfpJ0bd0fz0iMzzY45eDvBQehEICFV2HaayrwKddmI/ZeSx08ML49ytlURwkpISUF2AkihJUClCeEkAJI0xQCkqy+7RWdGfW3FNpG4ODj5NkrC9oPSoxoLLKnidufUyAPJgzPiR0Tg9Gu7unSaX1nsY0b3uDR5lef9s+1NhcU/VMc572uBa8CGNOh7zvaaRwC8s2nti4uHl9d7nuO86AcGjRo6KGkXOIHHL9+icl8LLxo2V3MnCeoVts68DxJ9pUjqchzWZmmGNf1IPwghR0nkZtyK8288vHrxrvltW1ZIIjpu3fIBWtF5IBHksBT2i9v6bvBWNt2hIABC5+12mm7oXW4j9kTrgLKU9sOd7AJ6An3rppPqv9rujzd+gUsa9y2ubsTAzQ+vDRzXE0AaDP3qa1tn1XimwS52vAN3kncOaknS65O117Ks3XNUA5MYJeeA0gczmB4ncuv0qXgp2TmNhuPBTAHAuxOA5YWEeK1WzNnsosFNmcZvdEYnfpwG5eY+mK/Dn0aIOYxVHDhPcZ7g9er08+14fU37q82KFOmK7OZnISERTFRCaihC1EimLOKs9l7bu7fKhVc1sg4DD2GPwOkDwhVyeUGr/6g333aP8Akf8A/RJZRJEfTsJIoXFtTatC2aHXFRrATAmSXH8LRmVEda5dobQo0GF9d7WNH3jmeg1PgvNu0npKeS5lmMDdMbgC88wMw0eZ6Lzq/wBqVKhLqj3PcdXOJcfMrXPsembd9KDWy20pz+Op7oYPmfBefbW7V3lyf8as8j7oOFn+VsBUjiSgITv0JKldxUSRCSlUlY7GHfc86MYXeI0Hmq5WDHYLc8ajv9LcviSrEabsTSx0bouzL30wTzio74lcVxalriDlmVYejt7XMuGHUOY+OLYc0nwMeau9r7OD2y32h/qHDrwXDc8u2NcZi3YDqrG2pNnT4KtYcLoMg/BWdvUGWa42PTmrm2eANF1etVbbOlabZGwH1Ic8ljOJ9pw5D5lT29bu5I49mbPqV34WDq4zhaOJPHktzs7Z1O3Zgp5vd7Tjq48+A5KW1YxjQyg2AN/xPMo6rwwQM3ldc548m93SK9uW02EToJcV8+dp9pm5ualU6F2FvJjMmj5+K9b7dXvqLV7ie+8YRzJXhwXbLkdMU6YraGShMPmiUAhEhKQQEnTIgilmknSVH0xfXTKVN9SoYYxpc48gvnntF2iqXdd9Z+h7tNu5lMGQBzORPNekel7a5ZRZbMOdQ4n8cDdB4mfJeOBPhk73TqhhElCihIQwpITEIIiE0I3JQgjIUr3yGjgEBCkaMkGo9HD4ucP2ajHsPuc3/UwDxXo1SwcATuAkzkAOq847GUiMVQatIjqCD8lrfSBTqVbZlVjz6uQSwaE8XcSCYz0hc9VrMZftNtCiX4aGF7xq9vsjkCPaPuCqbe5rHLIefwXK1veV1YWhIxkhrPvvMCRubveeTQSuerJHu/F9H33ur4XPZjbVKhVDb0Q18YKg9lp07wz7v4t2/ivY7e1kAkyIkGZBG4hfPu2fV4QGl7iDEwGNI5DMnxjovS/RZt6pUtnW7zJokCnx9S72WnjhII6EBM8s6x+ViZ3fb8N5VqBgws1QW9v9pye3oSZKDbd42jRe8mIaT7l0eR5F6Vtr+srtotPdZmepyHulYFde0rs1ar6jvtuJ8N3uhcpW8zkSkkkEnaLSI26FEhARFQMUwSKTUBtCNMElQ8pJkkF7262qbm8e+Za04WcmjILNhTXLyXvJM5lQhKhJ0ydRShMUSZBG8J26SiITARIQRuUzBkoTquhiDe9jNnOdbuLRq4lXNwxwpFh9lzYcDpofIrt7CU8FBo4gnzXJ2vum0ab3D2iCPPTzkDxXHU+m484LMLg4BpgEw45CNC4DMj4rqZdPeyXQDprlG4AaNHRc/qzgzOvecfgF0W9v/gl7TIkB3FjjpiHAxkeUZHXGuPr+hjWPH3HbabAq3NPGwgw4ju5iQAdfFaXsHZ1LW5BqjC17Sx06d4gtPmB5ldfozqj1dRhObXh/5XNj4sK3N9YMqMLSM4yPAhb59Pn+tdTdmls6RkPH5QvPPShtMtoOYD7RDOpdMx0aHHyWstb4+qLak42CHH7wHsu8YjwXj/pD2kX3ApAyKQl3918F3k0MHmrPNef4ZNJJJdmTFA4zkiKZA6AlE4qOVA5KNgQAKYIEkkkFQ8JJkkEdTV3UoAkklQgnCSSKdMkkgTfmmO9JJQRjVdDUkkHs/Zb+Uz+2Fm/SD7B/qZ8SkkuVajKV/wCX4D4qfZv8it/b/wDekkkuWvj/AG+7f+U/8ar0b/zqv9A/3heqP0SSXTPw+Z+X/wBlUW0Pa/I7/cxeK9pP+7uP7r0klrHy82vhWJkkl1YM7RMUkkDVEASSUEjUSSSBwkEklQ6SSSD/2Q==) center/cover" />
						</StackItem>
						<StackItem width="50%" lg-width="33.3%" md-width="50%" sm-width="100%">
							<Override slot="StackItemContent" padding-bottom="100%" background="url(data:image/jpeg;base64,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) center/cover" />
						</StackItem>
					</Stack>
				</StackItem>
			</Stack>
		</Section>
		<Section background="--color-dark" padding="60px 0" sm-padding="40px 0">
			<SocialMedia
				facebook="https://www.facebook.com/quarklyapp/"
				twitter="https://twitter.com/quarklyapp"
				youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
				vkontakte="https://vk.com/quarklyapp"
				telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
			>
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