import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import { Container } from '../../../../styles/components/CustomSwiper'

function CustomSwiperPagination({ swiperRef = null }) {
  const [swiper, setSwiper] = useState(null);
  const [slideIndex, setSlideIndex] = useState(1);
  const [slideCount, setSlideCount] = useState(0);

  const onProgress = useCallback(() => {
    setTimeout(() => {
      if (swiperRef && swiperRef.current) {
        setSlideIndex((swiperRef.current.swiper.realIndex + 1));
      }
    }, 100);
  }, [swiperRef]);

  useEffect(() => {
    if (swiperRef && swiperRef.current) {
      setSwiper(swiperRef.current.swiper);
    }
  }, [swiperRef]);

  useEffect(() => {
    if (swiper) {
      swiper.on('progress', onProgress);
      setSlideCount(swiper.slides.length);
    }

    return () => {
      if (swiper) {
        swiper.off('progress', onProgress);
      }
    };
  }, [swiper]);

  const goPrev = useCallback(() => {
    if (swiper) {
      swiper.slidePrev();
    }
  }, [swiper]);

  const goNext = useCallback(() => {
    if (swiper) {
      swiper.slideNext();
    }
  }, [swiper]);

  const { isEnd, isStart } = useMemo(
    () => ({ isStart: slideIndex === 1, isEnd: slideIndex === slideCount }),
    [slideIndex, slideCount],
  );

  return (
    <Container>
      <button
        type="button"
        onClick={goPrev}
        className={isStart ? 'should-have-opacity' : ''}
      >
        <FiArrowLeft size={20} />
      </button>

      <div>
        {`${slideIndex}/${slideCount}`}
        <span />
        <span className={isEnd ? 'should-have-opacity' : ''} />
      </div>

      <button
        type="button"
        onClick={goNext}
        className={isEnd ? 'should-have-opacity' : ''}
      >
        <FiArrowRight size={20} />
      </button>
    </Container>
  );
}

// CustomSwiperPagination.defaultProps = {
//   swiperRef: null,
// };

// CustomSwiperPagination.propTypes = {
//   swiperRef: PropTypes.instanceOf(SwiperInstance),
// };

export default CustomSwiperPagination;
