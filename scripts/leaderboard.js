const { useEffect, useState } = React

const Leaderboard = () => {
  const [rank, setRank] = useState(null)
  const getRank = async () => {
    const endPoint = '/api/get_all_game_ranking'
    const user = JSON.parse(localStorage.getItem('user'))
    const payload = {
      access_token: user.access_token,
      user_id: user.id,
    }
    await fetchData(endPoint, 'POST', payload).then((rs) => {
      const { success } = rs
      if (success === true) setRank(rs.data)
    })
  }

  useEffect(() => {
    getRank()

    const timer = setInterval(() => {
      getRank()
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  if (!rank) return null

  return (
    <div>
      <div className='leaderboard'>
        <div className='leaderboard-container'>
          <h3 className='leaderboard-title'>
            <img src='./images/leaderboard-title.png' alt='leaderboard-title' />
          </h3>

          <div className='leaderboard-content'>
            <div className='leaderboard-top'>
              <img
                src='./images/background-top-rater.png'
                alt='leaderboard-title'
              />

              <div className='top-content'>
                <div className='medal-item silver-medal'>
                  <div
                    style={{
                      backgroundImage: `${
                        rank.medals.silver.user.avatar
                          ? `url("${
                              URL_API_PREFIX + rank.medals.silver.user.avatar
                            }")`
                          : 'url("../images/avatar-frame.png")'
                      }`,
                    }}
                    className='user-avatar slide-shine'
                  />
                  <img
                    className='medal-img'
                    src='./images/silver-medal.png'
                    alt='silver-medal'
                  />
                  <p className='user-name'>{rank.medals.silver.user.name}</p>
                  <strong className='user-score'>
                    {rank.medals.silver.score}
                  </strong>
                </div>

                <div className='medal-item gold-medal'>
                  <div
                    style={{
                      backgroundImage: `${
                        rank.medals.gold.user.avatar
                          ? `url("${
                              URL_API_PREFIX + rank.medals.gold.user.avatar
                            }")`
                          : 'url("../images/avatar-frame.png")'
                      }`,
                    }}
                    className='user-avatar slide-shine'
                  />
                  <img
                    className='medal-img'
                    src='./images/gold-medal.png'
                    alt='gold-medal'
                  />
                  <p className='user-name'>{rank.medals.gold.user.name}</p>
                  <strong className='user-score'>
                    {rank.medals.gold.score}
                  </strong>
                </div>

                <div className='medal-item bronze-medal'>
                  <div
                    style={{
                      backgroundImage: `${
                        rank.medals.bronze.user.avatar
                          ? `url("${
                              URL_API_PREFIX + rank.medals.bronze.user.avatar
                            }")`
                          : 'url("../images/avatar-frame.png")'
                      }`,
                    }}
                    className='user-avatar slide-shine'
                  />
                  <img
                    className='medal-img'
                    src='./images/bronze-medal.png'
                    alt='bronze-medal'
                  />
                  <p className='user-name'>{rank.medals.bronze.user.name}</p>
                  <strong className='user-score'>
                    {rank.medals.bronze.score}
                  </strong>
                </div>
              </div>
            </div>

            <div className='leaderboard-list'>
              {rank.top_list.slice(0).map((item) => {
                return (
                  <div
                    key={item.rank}
                    className={
                      item.rank === rank.me.rank
                        ? 'leaderboard-list__item current-user'
                        : 'leaderboard-list__item'
                    }
                  >
                    <img
                      className='background-member'
                      src='./images/background-rater.png'
                      alt='background-purple'
                    />

                    {item.rank === rank.me.rank && (
                      <img
                        className='background-member bg-gold'
                        src='./images/background-current-user.png'
                        alt='background-gold'
                      />
                    )}
                    <div className='item-content'>
                      <span className='item-rate'>{item.rank}</span>

                      <div className='item-user'>
                        <div
                          style={{
                            backgroundImage: `${
                              item.user.avatar
                                ? `url("${URL_API_PREFIX + item.user.avatar}")`
                                : 'url("../images/avatar-frame.png")'
                            }`,
                          }}
                          className='user-avatar'
                        />
                        <p className='user-name'>{item.user.name}</p>
                      </div>

                      <strong className='item-score'>{item.score} điểm</strong>
                    </div>
                  </div>
                )
              })}
              
              {/* <div className='leaderboard-list__item'>
                <img
                  className='background-member'
                  src='./images/background-rater.png'
                  alt='background-purple'
                />

                <div className='item-content'>
                  <span className='item-rate'>4</span>

                  <div className='item-user'>
                    <div
                      style={{
                        backgroundImage: `url("../images/avatar-frame.png")`,
                      }}
                      className='user-avatar'
                    />
                    <p className='user-name'>Nguyen van a</p>
                  </div>

                  <strong className='item-score'>400 điểm</strong>
                </div>
              </div>
              <div className='leaderboard-list__item current-user'>
                <img
                  className='background-member'
                  src='./images/background-rater.png'
                  alt='background-purple'
                />
                <img
                  className='background-member bg-gold'
                  src='./images/background-current-user.png'
                  alt='background-gold'
                />

                <div className='item-content slide-shine'>
                  <span className='item-rate'>5</span>

                  <div className='item-user'>
                    <div
                      style={{
                        backgroundImage: `url("../images/avatar-frame.png")`,
                      }}
                      className='user-avatar'
                    />
                    <p className='user-name'>Nguyen van a</p>
                  </div>

                  <strong className='item-score'>450 điểm</strong>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <img
          className='close-popup'
          data-control={JSON.stringify({
            render_name: '#global-leaderboard .leaderboard',
            command: 'close',
            active_class: 'leaderboard-visible',
            without_ele: null,
          })}
          src='./images/close_icon_2.png'
          alt='close_icon'
        />
      </div>
    </div>
  )
}

const domContainer = document.querySelector('#global-leaderboard')
ReactDOM.render(<Leaderboard />, domContainer)
