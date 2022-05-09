const { expect } = require("chai")
const { ethers } = require("hardhat")

describe("Blog", async function () {
  let Blog, blog

  beforeEach(async function () {
    Blog = await ethers.getContractFactory("Blog")
    blog = await Blog.deploy("My blog")
    await blog.deployed()
  })

  it("Should create a post", async function () {
    await blog.createPost("My first post", "12345")

    const posts = await blog.fetchPosts()
    expect(posts[0].title).to.equal("My first post")
    expect(posts[0].content).to.equal("12345")
    expect(posts[0].id).to.equal(1)
    expect(posts.length).to.equal(1)
  })

  it("Should edit a post", async function () {
    await blog.createPost("My second post", "23456")

    await blog.updatePost(1, "My updated post", "34567", true)

    posts = await blog.fetchPosts()
    expect(posts[0].title).to.equal("My updated post")
    expect(posts[0].content).to.equal("34567")
    expect(posts[0].id).to.equal(1)
    expect(posts.length).to.equal(1)
  })

  it("Should should update the name", async function () {
    expect(await blog.name()).to.equal("My blog")

    await blog.updateName("My updated blog")

    expect(await blog.name()).to.equal("My updated blog")
  })
})
