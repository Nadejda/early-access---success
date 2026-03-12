export const Success = (): JSX.Element => {
  const whatHappensNextItems = [
    {
      icon: "https://c.animaapp.com/093kNRTZ/img/chats.svg",
      iconAlt: "Chats",
      title: "We stay in touch",
      description:
        "You'll get updates via e–mail — with launch details and everything you need to get started",
    },
    {
      icon: "https://c.animaapp.com/093kNRTZ/img/crownsimple.svg",
      iconAlt: "Crown simple",
      title: "You go first",
      description:
        "When we launch, early access members get priority. No waiting",
    },
    {
      icon: "https://c.animaapp.com/093kNRTZ/img/gift.svg",
      iconAlt: "Gift",
      title: "Your benefits are reserved",
      description:
        "All selected benefits are saved for you — ready when you are",
    },
  ];

  const benefitItems = [
    "No interest on your first loan for 3 months",
    "Business loans without ceiling",
    "Free POS terminal",
  ];

  const branchLocations = [
    "23, Awolowo Road Ikoyi",
    "Kings Plaza, 80, Adeniran Ogunsanya Street, Surulere",
    "Pentagon Plaza, 23 Opebi Road, Ikeja",
  ];

  const contactItems = [
    {
      icon: "https://c.animaapp.com/093kNRTZ/img/phone.svg",
      iconAlt: "Phone",
      text: "0700 5000 500",
    },
    {
      icon: "https://c.animaapp.com/093kNRTZ/img/at.svg",
      iconAlt: "At",
      text: "hello@renmoney.com",
    },
  ];

  return (
    <div
      className="relative w-[1280px] h-[1186px] bg-deepblue-100"
      data-model-id="417:9644"
    >
      <header className="flex w-[calc(100%_-_180px)] h-16 items-center justify-between px-0 py-3 absolute top-0 left-[90px] bg-transparent">
        <div className="relative w-32 h-8 aspect-[4]">
          <img
            className="absolute w-[73.68%] h-[92.14%] top-[7.86%] left-[26.32%]"
            alt="Group"
            src="https://c.animaapp.com/093kNRTZ/img/group@2x.png"
          />
          <img
            className="absolute w-[73.55%] h-[51.94%] top-[48.06%] left-[26.45%]"
            alt="Group"
            src="https://c.animaapp.com/093kNRTZ/img/group-1@2x.png"
          />
          <img
            className="absolute w-full h-[92.86%] top-[7.14%] left-0"
            alt="Group"
            src="https://c.animaapp.com/093kNRTZ/img/group-2@2x.png"
          />
        </div>

        <div className="inline-flex h-8 items-center justify-center gap-1 pt-[var(--collection-1-0)] pb-[var(--collection-1-0)] px-1 relative flex-[0_0_auto]">
          <img
            className="relative w-6 h-6 aspect-[1]"
            alt="User"
            src="https://c.animaapp.com/093kNRTZ/img/user.svg"
          />
        </div>
      </header>

      <div className="flex flex-col w-[540px] items-start justify-center pt-6 pb-8 px-8 absolute top-[76px] left-[370px] bg-deepblue-140 rounded-3xl">
        <div className="h-4 relative self-stretch w-full" />

        <img
          className="relative w-[125px] h-[120px] aspect-[1.04]"
          alt="Party popper"
          src="https://c.animaapp.com/093kNRTZ/img/party-popper-2.svg"
        />

        <div className="h-9 relative self-stretch w-full" />

        <div className="flex flex-col items-start pt-2 pb-7 px-0 w-full flex-[0_0_auto] relative self-stretch">
          <p className="mt-[-1.00px] font-header-1 font-[number:var(--header-1-font-weight)] text-white text-[length:var(--header-1-font-size)] tracking-[var(--header-1-letter-spacing)] leading-[var(--header-1-line-height)] relative self-stretch [font-style:var(--header-1-font-style)]">
            Welcome to our first wave of customers!
          </p>
        </div>

        <div className="flex items-center justify-around gap-[146px] px-0.5 py-0 w-full flex-[0_0_auto] relative self-stretch">
          <div className="relative flex-1 mt-[-1.00px] font-header-3 font-[number:var(--header-3-font-weight)] text-white text-[length:var(--header-3-font-size)] tracking-[var(--header-3-letter-spacing)] leading-[var(--header-3-line-height)] [font-style:var(--header-3-font-style)]">
            What happens next
          </div>
        </div>

        <div className="h-2 relative self-stretch w-full" />

        {whatHappensNextItems.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-2 pl-0.5 pr-0 py-2 relative self-stretch w-full flex-[0_0_auto]"
          >
            <img
              className="relative w-6 h-6 aspect-[1]"
              alt={item.iconAlt}
              src={item.icon}
            />
            <div className="flex flex-col items-start justify-center gap-0.5 relative flex-1 grow">
              <div className="flex items-center gap-2.5 pt-0.5 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative flex-1 mt-[-1.00px] font-body-medium font-[number:var(--body-medium-font-weight)] text-white text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-medium-font-style)]">
                  {item.title}
                </div>
              </div>
              <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative flex-1 mt-[-1.00px] font-caption-m-medium font-[number:var(--caption-m-medium-font-weight)] text-gray-70 text-[length:var(--caption-m-medium-font-size)] tracking-[var(--caption-m-medium-letter-spacing)] leading-[var(--caption-m-medium-line-height)] [font-style:var(--caption-m-medium-font-style)]">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="h-6 relative self-stretch w-full" />

        <div className="flex items-center justify-around gap-[146px] px-0.5 py-0 w-full flex-[0_0_auto] relative self-stretch">
          <div className="relative flex-1 mt-[-1.00px] font-header-3 font-[number:var(--header-3-font-weight)] text-white text-[length:var(--header-3-font-size)] tracking-[var(--header-3-letter-spacing)] leading-[var(--header-3-line-height)] [font-style:var(--header-3-font-style)]">
            Your benefits
          </div>
        </div>

        <div className="h-1 relative self-stretch w-full" />

        {benefitItems.map((benefit, index) => (
          <div
            key={index}
            className="flex items-start gap-2 pl-0.5 pr-0 py-2 relative self-stretch w-full flex-[0_0_auto]"
          >
            <div className="inline-flex flex-col h-[22px] items-center justify-center gap-2.5 relative flex-[0_0_auto]">
              <div className="relative w-4 h-0.5 bg-white" />
            </div>
            <div className="flex flex-col items-start justify-center gap-0.5 relative flex-1 grow">
              <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative flex-1 mt-[-1.00px] font-body-medium font-[number:var(--body-medium-font-weight)] text-white text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-medium-font-style)]">
                  {benefit}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute left-[calc(50.00%_-_272px)] bottom-0 w-[542px] h-[378px]">
        <div className="flex flex-col w-[238px] items-start absolute top-[236px] left-0.5">
          <div className="flex flex-col items-start justify-center gap-0.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative flex-1 mt-[-1.00px] font-body-bold font-[number:var(--body-bold-font-weight)] text-white text-[length:var(--body-bold-font-size)] tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-bold-font-style)]">
                Contact us
              </div>
            </div>
          </div>

          <div className="h-2 relative self-stretch w-full" />

          {contactItems.map((contact, index) => (
            <div
              key={index}
              className="flex items-start gap-2 px-0 py-2 relative self-stretch w-full flex-[0_0_auto]"
            >
              <img
                className="relative w-6 h-6 aspect-[1]"
                alt={contact.iconAlt}
                src={contact.icon}
              />
              <div className="flex flex-col items-start justify-center gap-0.5 relative flex-1 grow">
                <div className="flex items-center gap-2.5 pt-0.5 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative flex-1 mt-[-1.00px] font-body-medium-link font-[number:var(--body-medium-link-font-weight)] text-white text-[length:var(--body-medium-link-font-size)] tracking-[var(--body-medium-link-letter-spacing)] leading-[var(--body-medium-link-line-height)] underline overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-medium-link-font-style)]">
                    {contact.text}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col w-[296px] items-start absolute top-8 left-0.5">
          <div className="flex flex-col items-start justify-center gap-0.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative flex-1 mt-[-1.00px] font-body-bold font-[number:var(--body-bold-font-weight)] text-white text-[length:var(--body-bold-font-size)] tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-bold-font-style)]">
                Visit a branch
              </div>
            </div>
          </div>

          <div className="h-2 relative self-stretch w-full" />

          {branchLocations.map((location, index) => (
            <div
              key={index}
              className="flex items-start gap-2 px-0 py-2 relative self-stretch w-full flex-[0_0_auto]"
            >
              <img
                className="relative w-6 h-6 aspect-[1]"
                alt="Map pin"
                src="https://c.animaapp.com/093kNRTZ/img/mappin-2.svg"
              />
              <div className="flex flex-col items-start justify-center gap-0.5 relative flex-1 grow">
                <div className="flex items-center gap-2.5 pt-0.5 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
                  <p className="relative flex-1 mt-[-1.00px] font-body-medium-link font-[number:var(--body-medium-link-font-weight)] text-white text-[length:var(--body-medium-link-font-size)] tracking-[var(--body-medium-link-letter-spacing)] leading-[var(--body-medium-link-line-height)] underline [font-style:var(--body-medium-link-font-style)]">
                    {location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <img
          className="absolute top-8 right-0 w-[189px] h-[52px] aspect-[3.63]"
          alt="Logos"
          src="https://c.animaapp.com/093kNRTZ/img/logos.svg"
        />
      </div>
    </div>
  );
};
